import axios from "axios"

// https://viacep.com.br/ws/25645006/json/'

const apiSkill = axios.create({
    baseURL: 'http://localhost:8080/skill/'
})

export default apiSkill;