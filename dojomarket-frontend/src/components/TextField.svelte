<script>
    export let label = "";
    export let value;
    export let required = false;
    export let name = "";
    export let error = "";
    export let placeholder = "";
</script>

<style>
    label {
        margin-right: 0.5em;
        width: 120px;
        text-align: right;
    }

    input {
        margin-bottom: 1em;
        flex: 1;
        border: none;
        border-bottom: solid #000 0.1em;
        font-size: 18px;
    }
    input:focus {
        outline: 0;
        border-bottom: solid var(--primary-color) 0.1em;
    }

    div {
        display: flex;
        margin-bottom: 1em;
    }

    .error {
        color: red;
    }

</style>

<div>
    <label for={name}>
        <b>
            {label}
        </b>
        <span class:error>{required ? "*" : ""}</span>
        :
    </label>
    <input 
    placeholder={placeholder}
    type="text" 
    bind:value={value} 
    required={required} 
    name={name}
    >
</div>