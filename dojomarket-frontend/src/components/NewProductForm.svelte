<script>
    import TextField from './TextField.svelte';
    import FormButton from './FormButton.svelte';
    import * as yup from 'yup';
    import { products } from '../stores/products.js';

    let name = "";
    let description = "";
    let price = "";
    let submited = false;
    let error = "";

    let schema = yup.object().shape({
        name: yup.string("Name must be a string.").required("Name is required."),
        description: yup.string("Description must be a string.").required("Description is required."),
        price: yup.string("Price must be a string.").required("Price is required.")
    });

    const handleSubmit = async (event) => {
        await schema.validate({
            name,
            description,
            price
        }).then(() => {
            error = ""
        }).catch(err => {
            error = err.errors[0];
        });
        if(error === "") {
            console.log({
                name,
                description,
                price
            });
            products.create({
                name,
                description,
                price
            })

        }
    }
</script>
<style>
    #newProductForm {
        display: flex;
        flex-direction: column;
        padding: 2.5em;
        width: 80%;
        box-shadow: 0px 0px 9px 3px rgba(0, 0, 0, 0.1);
        margin-top: 3em;
    }
    p {
        color: red;
        width: 100%;
        text-align: center;
        margin: 0px;
        margin-top: 1em;
    }
</style>
<form id="newProductForm" on:submit|preventDefault={handleSubmit}>
    <TextField label="Name" bind:value={name} required name="name" {error} placeholder="Please insert the product name"/>
    <TextField label="Price" bind:value={price} required name="price" {error} placeholder="Please insert the product price"/>
    <TextField label="Description" bind:value={description} required name="description" {error} placeholder="Please insert the product description"/>
    <FormButton handleSubmit={() => {submited = true}} label="CREATE PRODUCT"/>
    <p>{error}</p>
</form>