<script>
	import { page } from '$app/stores';
	import Header from '$lib/Header.svelte';
	import { balance } from '$lib/stores/userBalance';
	import { wagmiConfig, connected, signerAddress } from '$lib/stores/wagmi';
	import { readContract, writeContract } from '@wagmi/core';

	import FactoryABI from '$lib/abi/Factory.json';

	async function getTokenData(fundingId) {
		try {
			const fundingInfo = await readContract($wagmiConfig, {
				abi: FactoryABI,
				address: '0x6e3c325735b524d4189e337d232bc0dc45d660e5',
				functionName: 'fundings',
				args: [fundingId]
			});
			console.log('Funding Info:', fundingInfo);
			return fundingInfo;
		} catch (error) {
			console.error('Error fetching funding info:', error);
		}
	}

	$: if ($connected) {
		getTokenData(Number($page.params.tokenAddress)).then((data) => {
			console.log(data);
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

	async function claimAirdrop() {
		try {
			const user = $signerAddress;
			const token = '0x8f9895491b38b6b9b21d18d21998ce55dc933988';

			const response = await fetch(`/airdrop/sign?address=${user}&token=${token}`);
			const data = await response.json();
			console.log(data);
			if (data.signature) {
				await writeContract($wagmiConfig, {
					abi: [
						{
							name: 'claimAirdrop',
							type: 'function',
							stateMutability: 'nonpayable',
							inputs: [
								{ name: 'token', type: 'address' },
								{ name: 'signature', type: 'bytes' }
							],
							outputs: []
						}
					],
					address: '0xbCdB8269E80fc67dc6F605F5BE85895801CCd1ad',
					functionName: 'claimAirdrop',
					args: [token, data.signature]
				});
			} else {
				console.error('cant get signature');
			}
		} catch (error) {
			console.error('Error al obtener la firma del servidor:', error);
		}
	}
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
				<img
					src="https://imagecdn.app/v1/images/https%3A%2F%2Fcataas.com%2Fcat?width=100&amp;height=100"
					class="h-12 w-12 rounded-full"
				/>
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
				<button on:click={claimAirdrop} class="w-full rounded bg-gray-700 py-2 text-gray-300"
					>Airdrop</button
				>
			</div>
			<div class="mt-2 text-sm text-gray-500">
				<p>Contract Address: <span class="text-gray-300">{contractAddress}</span></p>
			</div>
		</div>
	</div>
</div>
