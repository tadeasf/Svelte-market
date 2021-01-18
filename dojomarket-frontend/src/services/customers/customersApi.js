import axios from 'axios';

const customersApi = axios.create({
    baseURL: "http://localhost:3333"
});

export default customersApi;