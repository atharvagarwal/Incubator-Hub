import axios from 'axios';

const API = axios.create({baseURL : 'http://localhost:80'})

export const userChats = (id) =>{
    return API.get(`/message/`)
}