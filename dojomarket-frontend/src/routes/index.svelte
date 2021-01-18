<style>
	h1 {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
		grid-row-start: 1;
		grid-row-end: 1;
		grid-column-start: 1;
		grid-column-end: 6;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}

	#landingPageContainer {
		height: 100%;
		width: 100%;
		display: grid;
		grid-template-columns: 20% 20% 20% 20% 20%;
		grid-template-rows: 20% 20% 20% 20% 20%;
		
	}

	img {
		grid-row-start: 2;
		grid-row-end: 2;
		grid-column-start: 3;
		grid-column-end: 3;
		align-self: center;
		justify-self: center;
	}

</style>

<svelte:head>
	<title>Dojo Market</title>
</svelte:head>

<div id="landingPageContainer" class="fadeIn">
	<h1>A open-source market!</h1>
	<img src="/product.png" alt="Shopping bag"/>
</div>
