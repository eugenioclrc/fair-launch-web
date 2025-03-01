import { json } from '@sveltejs/kit';
//import { signTypedData } from 'viem/actions';
import { createWalletClient, custom } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import checkRegistration from '$lib/checkRegistration';
import { sepolia } from 'viem/chains';

// mock signer for test, dont use in production
//Address:     0x6C945ae76b7aB2F8D4978cD178714Ce59e9F65ad
//Private key: 0x4b7502539a70e48d7063e93f721b17376b1b98aa65f6025cc0a4d5b34f150af6

const PRIVATE_KEY = '0x4b7502539a70e48d7063e93f721b17376b1b98aa65f6025cc0a4d5b34f150af6';
const account = privateKeyToAccount(PRIVATE_KEY);


// Configura el cliente de la billetera
const walletClient = createWalletClient({
	account,
	chain: sepolia,
	transport: custom({ request: async (args) => { /* implementación de transporte personalizada */ } }),
  });

  
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
		chainId: sepolia.id,
		verifyingContract: '0xbCdB8269E80fc67dc6F605F5BE85895801CCd1ad'
	};

	const types = {
		AirdropRequest: [
			{ name: 'user', type: 'address' },
			{ name: 'token', type: 'address' }
		]
	};
	
	  const message = {
		user: address,
		token: token
	  };
	
	  const signature = await walletClient.signTypedData({
		domain,
		types,
		primaryType: 'AirdropRequest',
		message,
	  });

	return json({ signature });
}
