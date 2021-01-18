<script>
import { onMount } from 'svelte';

    import { orders } from '../stores/orders.js';
    export let id;
    export let customerId;
    export let total;
    let products;
    onMount(async () => {
        const response = await orders.show(id);
        products = response[0].products;
    })
</script>
<style>
    #orderDetails {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    #orderProductsList {
        box-shadow: inset 0 0 6px rgba(0,0,0,.2);
        border-radius: 8px;
        padding: 1em;
        height: 400px;
        overflow-y: auto;
    }

    #productInfo {
        display: flex;
    }

    p {
        margin: 0;
        padding: 0;
        font-size: 1.5em;
    }


    li {
        display: flex;
        flex-direction: column;
        border-bottom: solid #eee 0.1px;
        padding-bottom: 1em;
        margin-bottom: 1em;
        width: 100%;
    }

    .price {
        text-align: end;
        padding: 1em;
        font-size: 1.5em;
    }

    .price > b {
        color: var(--primary-color);
        font-size: 18px;
        font-size: 1.2em;

    }

    h1 {
        margin: 0px;
        margin-bottom: 0.2em;
        padding: 0px;
        font-size: 2em;
    }
</style>
<h1>Order Details</h1>
<div id="orderDetails">
    <p><b>Customer ID</b>: {customerId}</p>
    <p><b>Order ID</b>: {id}</p>
    <ul id="orderProductsList">
        
        {#if products && products.length > 0 }
            {#each products as product}
                <li>
                    <span>{product.name} - ID {product.id}</span>
                    <div id="productInfo">
                        <span style="flex: 1">{product.description}</span>
                        <span>U${product.price}</span>
                    </div>
                </li>
            {/each}
        {:else}
            <h1>loading...</h1>
        {/if}
    </ul>
    <span class="price">Total: <b>U${total}</b></span>
    
</div>
