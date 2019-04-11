import axios from 'axios';

const api = axios.create({
    baseURL: 'https://clonedropbox-rocketseat.herokuapp.com'
});

export default api;