import React, {useState} from "react"
import {login} from "../../../services/auth";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const  navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        await login(email, password);
        navigate('/');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="InputEmail" className="form-label">Email address</label>
                <input
                    className="form-control form-control-lg"
                    type="text"
                    id="InputEmail"
                    name="email"
                    onChange={(event => setEmail(event.target.value))}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="InputPassword" className="form-label">Password</label>
                <input
                    className="form-control form-control-lg"
                    type="password"
                    id="InputPassword"
                    name="password"
                    onChange={(event => setPassword(event.target.value))}
                />
            </div>
            <button className="btn btn-primary" type="submit">Se connecter</button>
        </form>
    )
}

export default LoginForm