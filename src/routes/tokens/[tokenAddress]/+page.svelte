<script>
	import { page } from '$app/stores';
	import Header from '$lib/Header.svelte';
	import { balance } from '$lib/stores/userBalance';
	import { wagmiConfig, connected } from '$lib/stores/wagmi';
	import { readContract } from '@wagmi/core';
	import {onMount} from 'svelte';

	import FactoryABI from '$lib/abi/Factory.json';

	async function getTokenData(fundingId) {
  try {
    const fundingInfo = await readContract($wagmiConfig, {
		abi: FactoryABI,
		address: '0x439E743a832a1952d563A1eFB531da39566E358c',
      functionName: 'fundings',
      args: [fundingId],
    });
    console.log('Funding Info:', fundingInfo);
    return fundingInfo;
  } catch (error) {
    console.error('Error fetching funding info:', error);
  }
}
	
$: if($connected) {
	getTokenData(Number($page.params.tokenAddress)).then(data => {
		console.log(data);
		;
	});
}

	//0x96c33CE8A28F76f24B83b156828A65Ccd0452CE7

	let tradeAmount = '';
	let tokenName = 'kidney money glitch';
	let tokenSymbol = 'KMG';
	let marketCap = '$4,101';
	let bondingCurveProgress = '0%';
	let kingOfTheHillProgress = '0%';
	let contractAddress = $page.params.tokenAddress;
	let trade = 'buy';

	function placeTrade() {
		alert(`Trading ${tradeAmount} ETH for ${tokenSymbol}`);
	}
	// Obtener el tokenAddress desde los parámetros de la ruta
</script>

<Header />

<!-- Aquí puedes mostrar más información utilizando tokenData -->

<div class="flex flex-col gap-6 p-4 text-white md:flex-row md:p-8">
	<!-- Chart Section -->
	<div class="flex-1 rounded-lg bg-black p-4">
		<div class="mb-4 flex items-center justify-between">
			<h2 class="text-xl font-bold">{tokenSymbol} - 1m</h2>
			<button class="rounded bg-gray-700 px-4 py-2 text-sm">Indicators</button>
		</div>
		<div class="flex h-[400px] items-center justify-center rounded-lg bg-gray-800">
			<p class="text-gray-500">[Chart Placeholder]</p>
		</div>
	</div>

	<!-- Trade & Token Info Section -->
	<div class="w-full space-y-4 md:w-1/3">
		<!-- Trade Panel -->
		<div class="rounded-lg bg-gray-800 p-4">
			<div class="flex items-center justify-between">
				<div class=" inline-block w-full">
					<!-- Botón de Compra -->
					<input
						type="radio"
						id="buy"
						bind:group={trade}
						name="trade"
						value="buy"
						class="peer hidden"
						checked
					/>
					<label
						for="buy"
						class="block w-full cursor-pointer rounded-l bg-gray-700 py-2 text-center text-white peer-checked:bg-green-500 peer-checked:text-white"
					>
						Buy
					</label>
				</div>

				<!-- Botón de Venta -->
				<div class=" inline-block w-full">
					<input
						bind:group={trade}
						type="radio"
						id="sell"
						name="trade"
						value="sell"
						class="peer hidden"
					/>
					<label
						for="sell"
						class="block w-full cursor-pointer rounded-r bg-gray-700 py-2 text-center text-gray-300 peer-checked:bg-red-500 peer-checked:text-white"
					>
						Refund
					</label>
				</div>
			</div>

			<div class="mt-4">
				<p class="text-gray-400">Balance: {$balance.formatted} ETH</p>
				<input
					type="number"
					bind:value={tradeAmount}
					placeholder="0.00 ETH"
					class="mt-2 w-full rounded bg-gray-700 p-2 text-white"
				/>
				<div class="mt-2 flex gap-2">
					<button class="rounded bg-gray-700 px-4 py-1 text-sm">0.01 ETH</button>
					<button class="rounded bg-gray-700 px-4 py-1 text-sm">0.05 ETH</button>
					<button class="rounded bg-gray-700 px-4 py-1 text-sm">0.1 ETH</button>
					<button class="rounded bg-gray-700 px-4 py-1 text-sm">Max</button>
				</div>
				<button
					on:click={placeTrade}
					class="mt-4 w-full rounded py-2 text-white"
					class:bg-red-500={trade === 'sell'}
					class:bg-green-500={trade === 'buy'}
				>
					{trade === 'sell' ? 'Ask Refund' : 'Place Buy'}
				</button>
			</div>
		</div>

		<!-- Token Info -->
		<div class="rounded-lg bg-gray-800 p-4">
			<div class="flex items-center gap-4">
				<img src="https://imagecdn.app/v1/images/https%3A%2F%2Fcataas.com%2Fcat?width=100&amp;height=100" class="h-12 w-12 rounded-full" />
				<div>
					<h3 class="text-lg font-bold">[{tokenSymbol}] {tokenName}</h3>
					<p class="text-gray-400">Market Cap: {marketCap}</p>
				</div>
			</div>
			<div class="mt-4">
				<p class="text-sm text-gray-400">Bonding Curve Progress: {bondingCurveProgress}</p>
				<p class="text-sm text-gray-400">King of the Hill Progress: {kingOfTheHillProgress}</p>
			</div>
			<div class="mt-4">
				<button class="w-full rounded bg-gray-700 py-2 text-gray-300">Claim vesting</button>
			</div>
			<div class="mt-4">

				<button  data-modal-target="default-modal" data-modal-toggle="default-modal" class="w-full rounded bg-gray-700 py-2 text-gray-300">Airdrop</button>
			</div>
			<div class="mt-2 text-sm text-gray-500">
				<p>Contract Address: <span class="text-gray-300">{contractAddress}</span></p>
			</div>
		</div>
	</div>
</div>



  
  <!-- Main modal -->
  <div id="default-modal" tabindex="-1" aria-hidden="true" class=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
	  <div class="relative p-4 w-full max-w-2xl max-h-full">
		  <!-- Modal content -->
		  <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
			  <!-- Modal header -->
			  <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
				  <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
					  Terms of Service
				  </h3>
				  <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
					  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
						  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
					  </svg>
					  <span class="sr-only">Close modal</span>
				  </button>
			  </div>
			  <!-- Modal body -->
			  <div class="p-4 md:p-5 space-y-4">
				  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
					  With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
				  </p>
				  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
					  The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
				  </p>
			  </div>
			  <!-- Modal footer -->
			  <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
				  <button data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
				  <button data-modal-hide="default-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
			  </div>
		  </div>
	  </div>
  </div>