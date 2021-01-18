import ordersApi from './ordersApi';

async function showOrders (id) {
    const response = await ordersApi.get(`/orders/${id}`)

    return response;
}

export default showOrders;