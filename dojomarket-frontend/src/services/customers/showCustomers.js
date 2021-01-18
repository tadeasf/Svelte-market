import customersApi from './customersApi';

async function showCustomers () {
    const response = await customersApi.get("/clients")

    return response;
}

export default showCustomers;