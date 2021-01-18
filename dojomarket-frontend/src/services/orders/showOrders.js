import ordersApi from './ordersApi';

async function showOrders () {
    const response = await ordersApi.get("/orders")

    return response;
}

export default showOrders;