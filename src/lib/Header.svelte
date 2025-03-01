<script>
	import Slogans from './Slogans.svelte';
	import { connected, web3Modal } from '$lib/stores/wagmi';

	export let showSlogan = true;

	async function connectWallet() {
		$web3Modal.open();
	}
</script>

<header>
	<div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
		<div class="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
			<div>
				<h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
					<a href="/">FairPump dot fun</a>
				</h1>
				{#if showSlogan}<Slogans />{/if}
			</div>

			<div class="flex items-center gap-4">
				<a
					class="inline-flex items-center justify-center gap-1.5 rounded-sm border border-gray-200 bg-white px-5 py-3 text-gray-900 transition hover:text-gray-700 focus:ring-3 focus:outline-hidden"
					href="/how-it-works"
				>
					<span class="text-sm font-medium"> How does it work? </span>
				</a>

				<a
					class="inline-flex items-center justify-center gap-1.5 rounded-sm border border-gray-200 bg-white px-5 py-3 text-gray-900 transition hover:text-gray-700 focus:ring-3 focus:outline-hidden"
					href="/airdrop"
				>
					<span class="text-sm font-medium">Airdrops </span>
				</a>

				<a
					class="inline-block rounded-sm bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:ring-3 focus:outline-hidden"
					type="button"
					href="/launch"
				>
					Create Token
				</a>

				<div class="rounded-2xl bg-slate-800">
					<w3m-button />
				</div>
			</div>
		</div>
	</div>
</header>
