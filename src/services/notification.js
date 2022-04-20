import API from "../lib/api"

// CHANGE LOCALSTORAGE BY COOKIE

export const sendToken = async (token, userId) => {
    await API.post("/messagings", { data: { token, user: userId } })
}
