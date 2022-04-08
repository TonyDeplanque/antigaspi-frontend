import React, {useState} from "react"
import {login} from "../../../services/auth";
import { useNavigate } from 'react-router-dom';
import {Button, TextField} from "@mui/material";

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
            <TextField
                size="small" id="InputEmail" label="Email" type="text" name="email" fullWidth margin="normal"
                value={email || ""}
                onChange={(event => setEmail(event.target.value))}
            />
            <TextField
                size="small" id="InputPassword" label="Password" type="password" name="password" fullWidth margin="normal"
                value={password || ""}
                onChange={(event => setPassword(event.target.value))}
            />
            <Button fullWidth className="btn" type="submit">Se connecter</Button>
        </form>
    )
}

export default LoginForm
