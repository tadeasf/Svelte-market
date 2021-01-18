import { writable } from 'svelte/store';
import { createNewCustomer, showCustomers } from "../services/customers";
import { loading } from './loading';

function createCustomers() {
    const { subscribe, set, update } = writable([]);

    const fetch = async () => {
        loading.toggle(true);
        await showCustomers()
                .then(r => {set(r.data); loading.toggle(false)})
                .catch(err => {console.log(err); loading.toggle(false)});
    }

    return {
        subscribe,
        fetch,
        create: async ({ name, email }) => {
            await createNewCustomer({ name, email })
                    .then(async r => await fetch())
                    .catch(err => console.log(err));
        }
    }
}

export const customers = createCustomers();

// [
//     {
//         name: "Pedro",
//         email: "pedrolages@mail.com",
//         id: "01"
//     },
//     {
//         name: "Pedro",
//         email: "pedrolages@mail.com",
//         id: "02"
//     },
//     {
//         name: "Pedro",
//         email: "pedrolages@mail.com",
//         id: "03"
//     },
//     {
//         name: "Pedro",
//         email: "pedrolages@mail.com",
//         id: "04"
//     },
//     {
//         name: "Pedro",
//         email: "pedrolages@mail.com",
//         id: "05"
//     },
//     {
//         name: "Pedro",
//         email: "pedrolages@mail.com",
//         id: "06"
//     },
//     {
//         name: "Pedro",
//         email: "pedrolages@mail.com",
//         id: "07"
//     },
//     {
//         name: "Pedro",
//         email: "pedrolages@mail.com",
//         id: "08"
//     },
//     {
//         name: "Pedro",
//         email: "pedrolages@mail.com",
//         id: "09"
//     },
//     {
//         name: "Pedro",
//         email: "pedrolages@mail.com",
//         id: "10"
//     },
//     {
//         name: "Pedro",
//         email: "pedrolages@mail.com",
//         id: "11"
//     },
//     {
//         name: "Pedro",
//         email: "pedrolages@mail.com",
//         id: "12"
//     },
//     {
//         name: "Pedro",
//         email: "pedrolages@mail.com",
//         id: "13"
//     },
//     {
//         name: "Pedro",
//         email: "pedrolages@mail.com",
//         id: "14"
//     },
// ]