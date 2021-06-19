import axios from 'axios';

const api = axios.create({
    baseURL: 'https://elissandrosilva-com.umbler.net/',
})

export default api;