<script>
    export let selected;
    export let disabled;
    export let handleSelect;
    export let name;
    export let image;
</script>
<style>
    li {
        display: flex;
        flex-direction: column;
        align-items: center;
		box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
        width: 100%;
        height: 100%;
        max-width: 100%;
        overflow: hidden;
        cursor: pointer;
    }

    img {
        width: 6em;
        height: 6em;
    }
    
    h1 {
        font-size: 20px;
        margin: 0px;
        padding: 0px;
        word-break: break-all;
        align-self: center;
    }

    .selected {
		box-shadow: 0px 0px 5px 2px var(--primary-color);

    }

    .disabled {
        background-color: rgba(0, 0, 0, 0.05);
    }

    div {
        margin: auto;
        text-align: center;
    }
</style>
<li 
    class:selected 
    class:disabled
    on:click={handleSelect}
>
    <div>
        <img src={image} alt="logo"/>
        <h1>{name}</h1>
    </div>
</li>