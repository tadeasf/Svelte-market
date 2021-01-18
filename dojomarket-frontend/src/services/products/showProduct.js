import productsApi from './productsApi';

async function showProduct (id) {
    const response = await productsApi.get(`/product/${id}`)

    return response;
}

export default showProduct;