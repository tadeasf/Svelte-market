<script>
    export let handleSubmit;
    export let label;
</script>
<style>
    button {
        padding: 0.5em 1em;
        background-color: var(--primary-color);
        border: none;
        border-radius: 0.3em;
        font-size: 1em;
        font-weight: bolder;
        color: #fff;
        width: 50%;
        align-self: center;
        outline: none;

    }
    button:focus {
        background-color: #00e366;
    }
</style>
<button class="pressed" type="submit" on:click|once={handleSubmit}>{label}</button>
