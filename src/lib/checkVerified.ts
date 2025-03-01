import { createPublicClient, http } from 'viem';

const humanityTestnet = {
  id: 1942999413,
  name: 'Humanity Testnet',
  network: 'humanity-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.testnet.humanity.org/'],
    },
    public: {
      http: ['https://rpc.testnet.humanity.org/'],
    },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://explorer.testnet.humanity.org' },
  },
  contracts: {
  },
};

const client = createPublicClient({
  chain: humanityTestnet,
  transport: http(),
});

const contractAddress = '0x96c33CE8A28F76f24B83b156828A65Ccd0452CE7';
const abi = [
  {
    "inputs": [{ "internalType": "address", "name": "user", "type": "address" }],
    "name": "isRegistered",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  }
];

export default async function checkRegistration(userAddress: string) {
  try {
    const isRegistered = await client.readContract({
      address: contractAddress,
      abi,
      functionName: 'isRegistered',
      args: [userAddress],
    });
    console.log(`Is registered: ${isRegistered}`);
    return isRegistered;
  } catch (error) {
    console.error('Error checking registration:', error);
  }
}

