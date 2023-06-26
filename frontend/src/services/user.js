import Axios from "axios"

let url = process.env.REACT_APP_API

const userSignup = (data) => (
    Axios.post(`${url}/signup`, data)
)

const userLogin = (data) => (
    Axios.post(`${url}/login`, data)
)

const UserOperations = () => {
    return {
        userSignup,
        userLogin
    }
}

export default UserOperations