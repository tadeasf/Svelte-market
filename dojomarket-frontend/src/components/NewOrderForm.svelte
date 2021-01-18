<script>
	import NewOrderFormCard from './NewOrderFormCard.svelte';
    import NewOrderSteps from './NewOrderSteps.svelte';
    import CartResult from './CartResult.svelte';
    import { customers } from '../stores/customers.js';
    import { products } from '../stores/products.js';
    import { cart } from '../stores/cart.js';
    import { onMount } from 'svelte';

    onMount(async () => {
        await cart.fetch();
        cart.resetCart();
    });
    
    let currentStep = 0;

    function handleReset() {
        cart.resetCart();
        currentStep = 0;
    }

    function handleNextStep() {
        switch(currentStep) {
            case 0:
                if($cart.customer !== undefined)
                    currentStep = currentStep + 1;
                break;
            case 1:
                if($cart.products.length > 0)
                    currentStep = currentStep + 1;
                break;
            case 2:
                currentStep = currentStep + 1;
                break;
            default:
                break;
        }
    }

    function handlePastStep() {
        switch(currentStep) {
            case 0:
                break;
            case 1:
                currentStep = currentStep - 1;
                break;
            case 2:
                currentStep = currentStep - 1;
                break;
            default:
                break;
        }
    }

    async function handleSubmit () {
        await cart.createOrder($cart.products, $cart.customer.name.concat("_").concat($cart.customer.email))        
        handleNextStep();
    }
</script>
<style>
    #newOrderFormContainer {
        width: 100%;
        display: flex;
        height: 100%;
        overflow: hidden;
    }

    #newOrderForm {
        flex: 1;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        margin-left: 8px;
        padding-left: 2em;
        padding-right: 2em;
    }

    ul {
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-auto-rows: 9em;
        list-style: none;
        gap: 1em;
        margin: 0px;
        padding: 10px;
        overflow-y: auto;
        margin-bottom: 1em;
    }

    #newOrderFormNavigationBar {
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 10px;
    }

    button {
        border: none;
        background-color: var(--primary-color);
        color: #fff;
        border-radius: 0.3em;
        padding: 0.5em 1em;
        font-weight: bolder;
        outline: none;
    }

    h1 {
        color: var(--primary-color);
        font-size: 3em;
        font-weight: bold;
        text-align: center;
    }

    h2 {
        color: red;
        text-align: center;
        width: 100%;
        height: 100%;
    }

    #succesfullyOrderedContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
		box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
        padding: 3em;
        margin: auto;
        text-align: center;
    }
    
</style>
<div id="newOrderFormContainer">
    <NewOrderSteps {currentStep}/>
    <form id="newOrderForm" on:submit|preventDefault={handleSubmit}>
        {#if currentStep === 0}
            {#if $customers.length > 0}
                <ul>
                    {#each $customers as customer}
                        <NewOrderFormCard 
                            disabled={$cart.customer != undefined ? $cart.customer.id !== customer.id : false}
                            selected={$cart.customer != undefined ? $cart.customer.id === customer.id : false}
                            name={customer.name}
                            handleSelect={() => cart.changeCustomer(customer)}
                            image="/customer.png"
                        />
                    {/each}
                </ul>
            {:else}
                <h2>First you need to create some customers!</h2>
            {/if}
        {:else if currentStep === 1}
            {#if $products.length > 0}
                <ul>
                        {#each $products as product}
                            <NewOrderFormCard 
                                selected={$cart.products.map(p => p.id).find(p => p === product.id) !== undefined}
                                name={product.name}
                                handleSelect={() => cart.toggleProduct(product)}
                                image="/product.png"
                            />
                        {/each}
                </ul>
            {:else}
                <h2>First you need to create some products!</h2>
            {/if}
        {:else if currentStep === 2}
            <CartResult />
        {:else if currentStep === 3}
            <div id="succesfullyOrderedContainer">
                <h1>SUCCESFULLY ORDERED!</h1>
                <button on:click={handleReset} style="font-size: 1em; padding: 0.8em;">MAKE ANOTHER ORDER</button>
            </div>
        {/if}
        {#if currentStep === 2}
            <div id="newOrderFormNavigationBar">
                <button class="navigationButton" on:click|preventDefault={handlePastStep}>BACK</button>
            </div>
        {:else if currentStep !== 3}
            <div id="newOrderFormNavigationBar">
                <button class="navigationButton" on:click|preventDefault={handlePastStep}>BACK</button>
                <button class="navigationButton" on:click|preventDefault={handleNextStep}>NEXT</button>
            </div>
        {/if}
    </form>
</div>