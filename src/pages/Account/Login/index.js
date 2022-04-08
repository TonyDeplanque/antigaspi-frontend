import React from "react";

import LoginForm from "../../../components/Account/Login/LoginForm";
import Title from "../../../components/common/Title";

const LoginPage = () => {
    return (
        <div className="login-page">
            <Title>Me connecter</Title>
            <LoginForm/>
        </div>
    )
}

export default LoginPage;
