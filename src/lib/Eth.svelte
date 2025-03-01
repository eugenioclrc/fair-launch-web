<script>
	import {
		connected,
		disconnectWagmi,
		signerAddress,
		wagmiConfig,
		configuredConnectors,
		loading,
		chainId,
		web3Modal,
		defaultConfig,
		wagmiLoaded
	} from '$lib/stores/wagmi';
	import { onMount } from 'svelte';
	const PUBLIC_WALLETCONNECT_ID = '0305dce0cdd39f7220ba2a10c9d10196';
	import { walletConnect, injected } from '@wagmi/connectors';
	import { connect, writeContract } from '@wagmi/core';
	import USDC from '$lib/abi/USDC.json';
	import { sepolia, anvil } from 'viem/chains';

	async function write() {
		const args = ['0x000000000000000000000000000000000000dEaD', 100000];
		const tx = await writeContract($wagmiConfig, {
			abi: USDC,
			address: '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238',
			functionName: 'transfer',
			args
		});

		console.log(tx);
	}

	onMount(async () => {
		const erckit = defaultConfig({
			appName: 'erc.kit',
			walletConnectProjectId: PUBLIC_WALLETCONNECT_ID,
			chains: [sepolia, anvil],
			connectors: [
				injected(),
				walletConnect({
					projectId: PUBLIC_WALLETCONNECT_ID
				})
			],
			autoConnect: false
		});

		await erckit.init();
	});
</script>
