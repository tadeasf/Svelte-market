import productsApi from './productsApi';

async function showProducts () {
    const response = await productsApi.get("/product")

    return response;
}

export default showProducts;