import API from "../lib/api"

// CHANGE LOCALSTORAGE BY COOKIE

export const login = async (identifier, password) => {
    const response = await API.post("/auth/local", {identifier, password})
    const {jwt, user} = response.data;
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("jwt", jwt);
}

export const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("jwt");
}

export const register = async (username, email, password) => {
    const response = await API.post("/auth/local/register", { username, email, password})
    return response.data
}

export const getCurrentUser = () => JSON.parse(localStorage.getItem('user'));

export const getCurrentJwt = () => localStorage.getItem('jwt');
