<script>
    export let name;
    export let description;
    export let price;
    export let id;
</script>
<style>
    li {
        margin-bottom: 1em;
        display: flex;
        height: 6em;
        padding: 1em;
		box-shadow: 2px 3px 2px 2px rgba(0, 0, 0, 0.1);
    }

    li:hover {
        transform: translate(-5px, -5px);
		box-shadow: 7px 8px 10px 2px rgba(0, 0, 0, 0.1);
    }

    #productCardContent {
        flex: 1;
        display: flex;
        align-items: center;
    }

    img {
        width: 6em;
        height: 6em;
    }

    #productCardDetails {
        display: flex;
        flex-direction: column;
        padding-left: 1em;
        justify-content: space-around;
        height: 100%;
    }
    
    b {
        color: var(--primary-color);
    }

    p {
        margin: 0;
        padding: 0;
    }

</style>
<li>
    <div id="productCardContent">
        <div id="productCardDetails">
            <p><b>Name</b>: {name}</p>
            <p><b>Description</b>: {description}</p>
            <p><b>Price</b>: U$<b style="color: #000">{price}</b></p>
            <p><b>{id}</b></p>

        </div>
    </div>
    <img src="/product.png" alt="Product representative logo"/>
</li>