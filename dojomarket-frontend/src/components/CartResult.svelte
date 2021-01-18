<script>
    import FormButton from './FormButton.svelte';
    import { cart } from '../stores/cart.js';
    function getTotal () {
        if($cart.products.length > 0)
            return $cart.products.map(p => p.price).reduce((total, currentValue) => Number(total) + Number(currentValue));
        return 0;
    }

    
</script>
<style>
    #cartResult {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
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
<div id="cartResult">
    <h1>Cart</h1>
    <p><b>Customer name</b>: {$cart.customer.name}</p>
    <ul id="orderProductsList">
        {#each $cart.products as cartProduct}
        <li>
            <span>{cartProduct.name} - {cartProduct.id}</span>
            <div id="productInfo">
                <span style="flex: 1">{cartProduct.description}</span>
                <span>{cartProduct.price}</span>
            </div>
        </li>
        {/each}
    </ul>
    <span class="price">Total: <b>U${getTotal()}</b></span>
    <FormButton label="ORDER"></FormButton>
</div>