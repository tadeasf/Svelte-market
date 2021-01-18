<script>
    import Icon from 'svelte-awesome/components/Icon.svelte'
    export let icon;
    export let hasProgressBar = false;
    export let concluded;
    export let inProgress;
    export let stepName;

</script>
<style>
    .progressBar {
        flex: 1;
        width: 1px;
        margin-left: 16px;
    }

    h1 {
        margin: 0px;
        padding: 0px;
        margin-left: 8px;
        font-size: 20px;
    }

    .step {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        margin-top: 8px;
    }
</style>
<div class="step">
    <Icon scale="2" data={icon} style={inProgress || concluded ? "color: var(--primary-color); width: 32px" : "color: #000; width: 32px"}/>
    <h1>{stepName}</h1>
</div>
{#if hasProgressBar}
<div class="progressBar" style={concluded ? "background-color: var(--primary-color)" : "background-color: #ddd"}/>
{/if}