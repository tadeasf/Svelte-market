import axios from 'axios';

const ordersApi = axios.create({
    baseURL: "http://localhost:3334"
});

export default ordersApi;