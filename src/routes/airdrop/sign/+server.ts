import { json } from '@sveltejs/kit';
import { signTypedData } from 'viem/actions';
import { privateKeyToAccount } from 'viem/accounts';
import checkRegistration from '$lib/checkRegistration';

// mock signer for test, dont use in production
//Address:     0x6C945ae76b7aB2F8D4978cD178714Ce59e9F65ad
//Private key: 0x4b7502539a70e48d7063e93f721b17376b1b98aa65f6025cc0a4d5b34f150af6

const PRIVATE_KEY = '0x4b7502539a70e48d7063e93f721b17376b1b98aa65f6025cc0a4d5b34f150af6';
const account = privateKeyToAccount(PRIVATE_KEY);

export async function GET({ url }) {
	const address = url.searchParams.get('address');
	const token = url.searchParams.get('token');

	if (!address || !token) {
		return json({ error: 'Missing parameters' }, { status: 400 });
	}

	const isRegister = await checkRegistration(address);
	if (!isRegister) {
		return json({ error: 'Missing human validation' }, { status: 400 });
	}

	const domain = {
		name: 'Airdrop',
		version: '1',
		chainId: 1,
		verifyingContract: 'DIRECCIÓN_DEL_CONTRATO_AIRDROP'
	};

	const types = {
		AirdropRequest: [
			{ name: 'user', type: 'address' },
			{ name: 'token', type: 'address' }
		]
	};

	const value = {
		user: address,
		token: token
	};

	const signature = await signTypedData({
		domain,
		types,
		value,
		account
	  });

	return json({ signature });
}
