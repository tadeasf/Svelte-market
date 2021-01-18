import productsApi from './productsApi';

async function createNewProduct ({ name, description, price }) {
    const response = await productsApi.post("/product", {
        name,
        description,
        price
    })

    return response;
}

export default createNewProduct;