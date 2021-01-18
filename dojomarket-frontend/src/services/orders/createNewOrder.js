import ordersApi from './ordersApi';

async function createNewOrder ({ products, token }) {
    console.log(products);
    const response = await ordersApi.post("/orders", 
    [...products.map(p => ({
        productId: p.id,
        quantity: 1
    }))],
    {
        headers: {
            "Authorization": token
        }
    })

    return response;
}

export default createNewOrder;