import axios from 'axios'

const REST_API_AUTH_URI = 'http://localhost:8080/api/auth'

export const registerTodo = (user) => axios.post(REST_API_AUTH_URI+'/register', user)

export const loginTodo = (login) => axios.post(REST_API_AUTH_URI+'/login', login)

export const storeToken = (token) => localStorage.setItem("token", token)

export const getToken = () => localStorage.getItem("token")

export const saveLoggedInUser = (username, role) => {
    sessionStorage.setItem("authenticatedUser", username);
    sessionStorage.setItem("role", role)
}

export const getLoggedInUser = () => sessionStorage.getItem("authenticatedUser")

export const isUserLogged = () => {
    const username = sessionStorage.getItem("authenticatedUser")
    console.log(username)
    if (username == null) {
        return false
    } else {
        return true
    }
}

export const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
}

export const isAdminUser = () => {
    let role = sessionStorage.getItem("role")
    if (role != null && role === "ROLE_ADMIN") {
        return true
    } else {
        return false
    }
}