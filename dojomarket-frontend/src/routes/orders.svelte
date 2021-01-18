<script>
	import OrderCard from '../components/OrderCard.svelte';
	import Modal from '../components/Modal.svelte';
	import NewOrderForm from '../components/NewOrderForm.svelte';
	import { orders } from '../stores/orders.js';
	function getTotal (products) {
        return products.map(p => p.price).reduce((total, currentValue) => Number(total) + Number(currentValue));
    }
	orders.fetch()
</script>
<svelte:head>
	<title>Orders</title>
</svelte:head>
<style>
	#ordersSectionsWrapper {
		display: flex;
		width: 100%;
		height: 100%;
	}
	
	#newordersection {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 2em;
	}
	#ordersListSection {
		flex: 1;
		flex-direction: column;
		border-left: 0.2px solid #000;
		display: flex;
		align-items: center;
		padding: 0 2em;
	}
	#ordersList {
		list-style: none;
		margin: 0px;
		padding: 0px;
		padding-right: 0.5em;
		overflow: auto;
		width: 100%;
		padding-top: 0.5em;
	}

	h1 {
        font-size: 3em;
        font-weight: normal;
        text-align: center;
	}

	#noOrdersWarning {
		color: red;
		text-align: center;
	}
</style>

<div id="ordersSectionsWrapper" class="fadeIn">
	<section id="newordersection">
		<h1>Register a new Order</h1>
		<NewOrderForm/>
	</section>
	<section id="ordersListSection">
		<Modal>
			<h1>All orders</h1>
			<ul id="ordersList">
				{#if $orders.length > 0}
					{#each $orders as order}
						<OrderCard 
							customerId={order.userId} 
							numberOfProducts={order.products.length} 
							total={getTotal(order.products)}
							id={order.orderId}
						/>
					{/each}
				{:else}
					<h2 id="noOrdersWarning">First you need to create some Orders!</h2>
				{/if}
			</ul>
		</Modal>
	</section>
</div>