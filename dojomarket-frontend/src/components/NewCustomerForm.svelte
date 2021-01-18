<script>
    import TextField from './TextField.svelte';
    import FormButton from './FormButton.svelte';
    import * as yup from 'yup';
    import { customers } from '../stores/customers';

    let name = "";
    let email = "";
    let submited = false;
    let error = "";

    let schema = yup.object().shape({
        name: yup.string("Name must be a string.").required("Name is required."),
        email: yup.string("E-mail must be a string.").email("E-mail must be a valid format").required("E-mail is required.")
    });

    const handleSubmit = async (event) => {
        await schema.validate({
            name,
            email
        }).then(() => {
            error = ""
        }).catch(err => {
            error = err.errors[0];
        });
        if(error === "") {
            console.log({
                name,
                email
            })
            await customers.create({
                name,
                email
            })
        }
    }
</script>
<style>
    #newCustomerForm {
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
<form id="newCustomerForm" on:submit|preventDefault={handleSubmit}>
    <TextField label="Nome" bind:value={name} required name="nome" {error} placeholder="Please insert the customer name"/>
    <TextField label="E-mail" bind:value={email} required name="email" {error} placeholder="Please insert the customer e-mail"/>
    <FormButton handleSubmit={() => {submited = true}} label="CREATE CUSTOMER"/>
    <p>{error}</p>
</form>