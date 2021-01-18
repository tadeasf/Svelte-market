import customersApi from './customersApi';

async function createNewCustomer ({ name, email }) {
    const response = await customersApi.post("/clients", {
        "name": name,
        "email": email
    })

    return response;
}

export default createNewCustomer;