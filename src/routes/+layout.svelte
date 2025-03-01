<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Eth from '$lib/Eth.svelte';

	import '../app.css';
	let { children } = $props();
</script>

<Eth />
{@render children()}

<Footer />
