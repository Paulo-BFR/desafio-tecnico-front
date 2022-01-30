import axios from "axios"

// https://viacep.com.br/ws/25645006/json/'

const apiUser = axios.create({
    baseURL: 'http://localhost:8080/user/'
})

export default apiUser;