// src/lib/stores.js
import { derived, get } from 'svelte/store';
import { getBalance } from '@wagmi/core';
import { signerAddress, chainId, connected, wagmiConfig } from './wagmi';

// Store para almacenar el balance del usuario
export const balance = derived(
	[signerAddress, connected, chainId],
	([$signerAddress, $connected], set) => {
		// Función para obtener y establecer el balance
		const fetchBalance = async () => {
			if ($connected && $signerAddress) {
				try {
					const userBalance = await getBalance(get(wagmiConfig), {
						address: get(signerAddress) as `0x${string}`
					});
					set({
						value: Number(userBalance.value),
						decimals: userBalance.decimals,
						formatted: userBalance.formatted,
						symbol: userBalance.symbol
					});
				} catch (error) {
					console.error('Error al obtener el balance:', error);
					set({ value: 0, decimals: 0, formatted: '', symbol: '' });
				}
			} else {
				set({ value: 0, decimals: 0, formatted: '', symbol: '' });
			}
		};

		// Llamar a la función para obtener el balance
		fetchBalance();

		// Opcional: Puedes retornar una función de limpieza si es necesario
		return () => {};
	},
	{ value: 0, decimals: 0, formatted: '', symbol: '' } // Valor inicial del store
);
