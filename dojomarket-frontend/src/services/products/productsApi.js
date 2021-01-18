import axios from 'axios';

const productsApi = axios.create({
    baseURL: "http://localhost:3335"
})

export default productsApi;