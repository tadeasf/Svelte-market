import { writable } from 'svelte/store';
import { products } from './products.js';
import { customers } from './customers.js';
import { orders } from './orders.js';

function createCart() {
    const { subscribe, set, update } = writable({
        customer: undefined,
        products: []
    });

    return {
        subscribe,
        fetch: async() => {
            await products.fetch();
            await customers.fetch();
        },
        changeCustomer: (customer) => {
            update(cart => ({...cart, customer}))
        },
        toggleProduct: (product) => {
            update(cart => {
                const indexOfProductInCart = cart.products.map(p => p.id).indexOf(product.id);
                if(indexOfProductInCart === -1)
                    return ({
                            customer: cart.customer,
                            products: [...cart.products, product]
                    })
                cart.products.splice(indexOfProductInCart, 1)
                return cart;
            })
        },
        resetCart: () => set({
            customer: undefined,
            products: []
        }),
        createOrder: async (products, token) => {
            await orders.create({products, token})
        }
    }
}

export const cart = createCart();