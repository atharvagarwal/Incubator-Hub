import axios from 'axios';

const API = axios.create({baseURL : 'http://localhost:80'})

export const getMessages = (id) =>{
    return API.get(`/message/${id}`)
}