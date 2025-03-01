<script>
	import Header from '$lib/Header.svelte';
</script>

<Header />

<div class="relative" id="home">
	<div aria-hidden="true" class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40">
		<div class="from-primary h-56 bg-gradient-to-br to-purple-400 blur-[106px]"></div>
		<div class="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px]"></div>
	</div>
	<div class="mx-auto max-w-7xl px-6 md:px-12">
		<div class="space-y-4">
			<details class="group border-s-4 border-green-500 bg-gray-50 p-6" open>
				<summary class="flex cursor-pointer items-center justify-between gap-1.5">
					<h2 class="text-lg font-medium text-gray-900">1️⃣ Create a Token Instantly</h2>
				</summary>
				<p class="mt-4 leading-relaxed text-gray-700">
					💡 Anyone can create a token with just a few clicks. <br />
					⚡ No coding required, just set the parameters and deploy.
				</p>
			</details>

			<details class="group border-s-4 border-blue-500 bg-gray-50 p-6" open>
				<summary class="flex cursor-pointer items-center justify-between gap-1.5">
					<h2 class="text-lg font-medium text-gray-900">2️⃣ Fair & Dynamic Buying Process</h2>
				</summary>
				<p class="mt-4 leading-relaxed text-gray-700">
					🛒 At launch, everyone can buy the token freely. <br />
					📉 As more people buy, fewer tokens are distributed per ETH.
				</p>
			</details>

			<details class="group border-s-4 border-yellow-500 bg-gray-50 p-6" open>
				<summary class="flex cursor-pointer items-center justify-between gap-1.5">
					<h2 class="text-lg font-medium text-gray-900">3️⃣ Sell Anytime Before Market Cap Lock</h2>
				</summary>
				<p class="mt-4 leading-relaxed text-gray-700">
					💰 Users can sell their share and get their ETH back. <br />
					🔐 Once the market cap reaches <strong>10 ETH</strong>, selling is locked.
				</p>
			</details>

			<details class="group border-s-4 border-purple-500 bg-gray-50 p-6" open>
				<summary class="flex cursor-pointer items-center justify-between gap-1.5">
					<h2 class="text-lg font-medium text-gray-900">4️⃣ Final Buying Phase (Last 30 min)</h2>
				</summary>
				<p class="mt-4 leading-relaxed text-gray-700">
					⏳ Once the cap is hit, <strong>only buying is allowed</strong> for the next
					<strong>30 minutes</strong>. <br />
					🚀 This prevents bots and ensures fair distribution.
				</p>
			</details>

			<details class="group border-s-4 border-red-500 bg-gray-50 p-6" open>
				<summary class="flex cursor-pointer items-center justify-between gap-1.5">
					<h2 class="text-lg font-medium text-gray-900">5️⃣ Liquidity Burn & Token Claiming</h2>
				</summary>
				<p class="mt-4 leading-relaxed text-gray-700">
					🔥 After 30 minutes, liquidity is permanently burned. <br />
					🔑 Users can claim their purchased tokens.
				</p>
			</details>

			<details class="group border-s-4 border-gray-500 bg-gray-50 p-6" open>
				<summary class="flex cursor-pointer items-center justify-between gap-1.5">
					<h2 class="text-lg font-medium text-gray-900">
						6️⃣ 10-Day Vesting for Anti-Rug Protection
					</h2>
				</summary>
				<p class="mt-4 leading-relaxed text-gray-700">
					⏳ Tokens are distributed over <strong>10 days</strong> in a vesting schedule. <br />
					🛡️ This prevents <strong>dev rug pulls</strong> and blocks instant "sniper" dumps.
				</p>
			</details>
		</div>
	</div>
</div>
