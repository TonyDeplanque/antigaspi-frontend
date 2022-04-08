import React from "react";
import {getCurrentUser} from "../services/auth";
import { Navigate } from "react-router-dom"
const PrivateRoute = ({ children }) => {
    const currentUser = getCurrentUser()
    return currentUser ? children : <Navigate to="/login" />
}

export default PrivateRoute;
