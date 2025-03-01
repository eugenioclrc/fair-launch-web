<script>
	import Header from '$lib/Header.svelte';
	import FactoryABI from '$lib/abi/Factory.json';
	import { wagmiConfig } from '$lib/stores/wagmi';
	import { writeContract } from '@wagmi/core';

	let name = '';
	let symbol = '';
	let description = '';
	let imageUrl = '';
	let twitter = '';
	let telegram = '';
	let web = '';

	async function launchToken() {
		if (!name || !symbol) {
			alert('Name and Symbol are required!');
			return;
		}

		const tokenData = {
			name,
			symbol,
			imageUrl: imageUrl || null,
			twitter: twitter || null,
			telegram: telegram || null,
			web: web || null
		};

		//

		const tx = await writeContract($wagmiConfig, {
			abi: FactoryABI,
			address: '0x439E743a832a1952d563A1eFB531da39566E358c',
			functionName: 'createFunding',
			args: [name, symbol, '100000000000000000000', '2500000000000000000']
		});

		console.log(tx);

		console.log('Launching token with data:', tokenData);
		alert(`Token "${name}" launched successfully!`);
	}
</script>

<Header />

<div class="relative bg-slate-100">
	<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-lg">
			<h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
				🚀 Launch Your Token
			</h1>

			<p class="mx-auto mt-4 max-w-md text-center text-gray-500">
				Create and deploy your token effortlessly with fair mechanics.
			</p>

			<form
				on:submit|preventDefault={launchToken}
				class="mt-6 mb-0 space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-lg sm:p-6 lg:p-8"
			>
				<p class="text-center text-lg font-medium">Enter Token Details</p>

				<!-- Token Name -->
				<div>
					<label for="nametoken" class="sr-only">Token Name</label>
					<div class="relative">
						<input
							type="text"
							id="nametoken"
							bind:value={name}
							class="w-full rounded-lg border border-gray-200 bg-slate-50 p-4 pe-12 text-sm shadow-xs"
							placeholder="Token Name"
							required
						/>
					</div>
				</div>

				<!-- Token Symbol -->
				<div>
					<label for="symbol" class="sr-only">Token Symbol</label>
					<div class="relative">
						<input
							type="text"
							id="symbol"
							bind:value={symbol}
							class="w-full rounded-lg border border-gray-200 bg-slate-50 p-4 pe-12 text-sm shadow-xs"
							placeholder="Token Symbol (e.g., FAIR)"
							required
						/>
					</div>
				</div>

				<!-- Description -->
				<div>
					<label for="description" class="sr-only">Description (Optional)</label>
					<div class="relative">
						<input
							type="text"
							id="description"
							bind:value={description}
							class="w-full rounded-lg border border-gray-200 bg-slate-50 p-4 pe-12 text-sm shadow-xs"
							placeholder="Description (Optional)"
						/>
					</div>
				</div>

				<!-- Image URL -->
				<div>
					<label for="imageUrl" class="sr-only">Image URL (Optional)</label>
					<div class="relative">
						<input
							type="text"
							id="imageUrl"
							bind:value={imageUrl}
							class="w-full rounded-lg border border-gray-200 bg-slate-50 p-4 pe-12 text-sm shadow-xs"
							placeholder="Image URL (Optional)"
						/>
					</div>
				</div>

				<!-- Twitter -->
				<div>
					<label for="twitter" class="sr-only">Twitter (Optional)</label>
					<div class="relative">
						<input
							type="text"
							id="twitter"
							bind:value={twitter}
							class="w-full rounded-lg border border-gray-200 bg-slate-50 p-4 pe-12 text-sm shadow-xs"
							placeholder="Twitter (Optional)"
						/>
					</div>
				</div>

				<!-- Telegram -->
				<div>
					<label for="telegram" class="sr-only">Telegram (Optional)</label>
					<div class="relative">
						<input
							type="text"
							id="telegram"
							bind:value={telegram}
							class="w-full rounded-lg border border-gray-200 bg-slate-50 p-4 pe-12 text-sm shadow-xs"
							placeholder="Telegram (Optional)"
						/>
					</div>
				</div>

				<!-- Website -->
				<div>
					<label for="web" class="sr-only">Website (Optional)</label>
					<div class="relative">
						<input
							type="text"
							id="web"
							bind:value={web}
							class="w-full rounded-lg border border-gray-200 bg-slate-50 p-4 pe-12 text-sm shadow-xs"
							placeholder="Website (Optional)"
						/>
					</div>
				</div>

				<!-- Launch Button -->
				<button
					type="submit"
					class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700"
				>
					🚀 Launch Token
				</button>
			</form>
		</div>
	</div>
</div>
