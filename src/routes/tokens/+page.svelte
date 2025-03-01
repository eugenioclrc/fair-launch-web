<script>
	import Header from '$lib/Header.svelte';

	export let tokens = [
		{
			image: 'https://cataas.com/cat',
			name: 'Greed3',
			user: 'User123',
			minutesAgo: 10,
			marketCap: '15.5 ETH',
			symbol: 'GRD3',
			description: 'A new token for fair trading.'
		},
		{
			image: 'https://cataas.com/cat',
			name: 'TokenX',
			user: 'User456',
			minutesAgo: 5,
			marketCap: '8.2 ETH',
			symbol: 'TKX',
			description: 'Decentralized and community-driven.'
		}
	];
</script>

<Header />

<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each tokens as token}
			<article
				class="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-xs hover:[animation-duration:_4s]"
			>
				<div class="flex items-start gap-4 rounded-[10px] bg-white p-4 !pt-6 sm:p-6">
					<img
						src={'https://imagecdn.app/v1/images/' +
							encodeURIComponent(token.image) +
							'?width=300&height=300'}
						alt={token.name}
						class="h-16 w-16 rounded-lg object-cover"
					/>
					<div>
						<p class="text-sm text-gray-500">
							{token.name} created by {token.user}
							{token.minutesAgo} minutes ago
						</p>
						<p class="text-sm text-gray-500">Total market cap: {token.marketCap}</p>
						<a href="/">
							<h3 class="mt-1 text-lg font-medium text-gray-900">
								{token.name} ({token.symbol}): {token.description}
							</h3>
						</a>
					</div>
				</div>
			</article>
		{/each}
	</div>
</div>
