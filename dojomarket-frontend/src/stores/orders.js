import { writable } from 'svelte/store';
import { createNewOrder, showOrder, showOrders } from '../services/orders'

function createOrders() {
    const { subscribe, set, update } = writable([]);
    const fetch = async () => {
        await showOrders()
                .then(r => set(r.data))
                .catch(err => console.log(err));
    }

    return {
        subscribe,
        fetch,
        create: async ({ products, token }) => {
            await createNewOrder({ products, token })
                    .then(async r => await fetch())
                    .catch(err => console.log(err));
        },
        show: async (id) => {
            return await showOrder(id)
                    .then(r => r.data)
                    .catch(err => console.log(err));
        }
    }
}

export const orders = createOrders();

// [
//     {
//         customerName: "Pedro Lages",
//         numberOfProducts: 7,
//         total: "1000.00",
//         id: "01"
//     },
//     {
//         customerName: "Pedro Lages",
//         numberOfProducts: 7,
//         total: "1000.00",
//         id: "02"
//     },
//     {
//         customerName: "Pedro Lages",
//         numberOfProducts: 7,
//         total: "1000.00",
//         id: "03"
//     },
//     {
//         customerName: "Pedro Lages",
//         numberOfProducts: 7,
//         total: "1000.00",
//         id: "04"
//     },
//     {
//         customerName: "Pedro Lages",
//         numberOfProducts: 7,
//         total: "1000.00",
//         id: "05"
//     },
//     {
//         customerName: "Pedro Lages",
//         numberOfProducts: 7,
//         total: "1000.00",
//         id: "06"
//     },
//     {
//         customerName: "Pedro Lages",
//         numberOfProducts: 7,
//         total: "1000.00",
//         id: "07"
//     },
//     {
//         customerName: "Pedro Lages",
//         numberOfProducts: 7,
//         total: "1000.00",
//         id: "08"
//     },
//     {
//         customerName: "Pedro Lages",
//         numberOfProducts: 7,
//         total: "1000.00",
//         id: "09"
//     },
//     {
//         customerName: "Pedro Lages",
//         numberOfProducts: 7,
//         total: "1000.00",
//         id: "10"
//     },
//     {
//         customerName: "Pedro Lages",
//         numberOfProducts: 7,
//         total: "1000.00",
//         id: "11"
//     },
//     {
//         customerName: "Pedro Lages",
//         numberOfProducts: 7,
//         total: "1000.00",
//         id: "12"
//     },
//     {
//         customerName: "Pedro Lages",
//         numberOfProducts: 7,
//         total: "1000.00",
//         id: "13"
//     },
//     {
//         customerName: "Pedro Lages",
//         numberOfProducts: 7,
//         total: "1000.00",
//         id: "14"
//     },

// ]