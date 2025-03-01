<script>
	import Header from '$lib/Header.svelte';
	import Slogans from '$lib/Slogans.svelte';

	import { connected } from 'svelte-wagmi';
</script>

<Header showSlogan={false} />

<div class="relative" id="home">
	<div aria-hidden="true" class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40">
		<div class="from-primary h-56 bg-gradient-to-br to-purple-400 blur-[106px]"></div>
		<div class="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px]"></div>
	</div>
	<div class="mx-auto max-w-7xl px-6 md:px-12">
		<div class="relative ml-auto pt-36">
			<div class="mx-auto text-center lg:w-2/3">
				<h1 class="text-5xl font-bold text-balance text-gray-900 md:text-6xl xl:text-7xl">
					FairPump. <span class="text-primary text-indigo-600 italic"><Slogans /></span>
				</h1>
				<p class="mt-8 text-gray-700">
					Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas doloribus
					asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!
				</p>
				<div class="mt-16 flex flex-wrap justify-center gap-x-6 gap-y-4">
					<a
						href="/launch"
						class="before:bg-primary relative flex h-11 w-full items-center justify-center px-6 underline before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
					>
						<span class="relative text-base font-semibold">Launch token</span>
					</a>
					<a
						href="/tokens"
						class="before:bg-primary/10 relative flex h-11 w-full items-center justify-center px-6 underline before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
					>
						<span class="text-primary relative text-base font-semibold">Token list</span>
					</a>
					<a
						href="/how-it-works"
						class="before:bg-primary/10 relative flex h-11 w-full items-center justify-center px-6 underline before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
					>
						<span class="text-primary relative text-base font-semibold">Learn more</span>
					</a>
				</div>
				<div class="mt-16 hidden justify-between border-y border-gray-100 py-8 sm:flex">
					<!-- Lowest Price -->
					<div class="text-left">
						<h6 class="text-lg font-semibold text-gray-700">The Lowest Fees</h6>
						<p class="mt-2 text-gray-500">
							Our fair launch system ensures minimal transaction costs, making token creation
							accessible to everyone.
						</p>
					</div>

					<!-- Fastest on the Market -->
					<div class="text-left">
						<h6 class="text-lg font-semibold text-gray-700">The Fastest Deployment</h6>
						<p class="mt-2 text-gray-500">
							Deploy your token in seconds with a seamless, gas-efficient process—no complex
							contracts required.
						</p>
					</div>

					<!-- Most Loved -->
					<div class="text-left">
						<h6 class="text-lg font-semibold text-gray-700">Trusted by the Community</h6>
						<p class="mt-2 text-gray-500">
							Designed with anti-rug mechanics and fair distribution, ensuring long-term trust and
							adoption.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div id="features">
	<div class="mx-auto max-w-7xl px-6 md:px-12">
		<div class="w-full">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="text-secondary h-6 w-6"
			>
				<path
					fill-rule="evenodd"
					d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
					clip-rule="evenodd"
				/>
			</svg>

			<h2 class="my-8 text-2xl font-bold text-gray-700 md:text-4xl">
				Launch Your Token. No Rugs. No Snipers. No BS. 🚀
			</h2>
			<p class="text-xl text-gray-600">
				🛠️ <b>Zero coding, zero headaches</b> – create your token faster than you can say “Wen
				launch?”.<br />
				🔥 <b>Fair play, real gains</b> – no dev dumps, no instant rugs, just
				<b>pure degen energy</b>. <br />
				🏎️ <b>Speedrun to market</b> – deploy in seconds while others are still reading Solidity
				docs. <br />
				🔐 <b>Sniper-proof, rug-proof, stress-proof</b> – your token is safe from bad actors (and
				your own FOMO).<br />
				🤝 <b>Built for degens, trusted by believers</b> – because Web3 deserves better launches.<br
				/>
				<strong>Still thinking? In crypto, hesitation costs more than gas fees. Let’s go. ⏳</strong
				>
			</p>
		</div>
		<div
			class="mt-16 grid divide-x divide-y divide-gray-100 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4"
		>
			<!-- Step 1: Token Creation -->
			<div
				class="group relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
			>
				<div class="relative space-y-8 p-8 py-12">
					<img
						src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png"
						class="w-12"
						alt="Token creation icon"
					/>
					<div class="space-y-2">
						<h5 class="group-hover:text-secondary text-xl font-semibold text-gray-700 transition">
							Create Your Token
						</h5>
						<p class="text-gray-600">
							🚀 Anyone can create a token with a few clicks. <br />
							🛠️ No coding required—just configure and launch.
						</p>
					</div>
				</div>
			</div>

			<!-- Step 2: Buying Process -->
			<div
				class="group relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
			>
				<div class="relative space-y-8 p-8 py-12">
					<img
						src="https://cdn-icons-png.flaticon.com/512/4341/4341134.png"
						class="w-12"
						alt="Buying process icon"
					/>
					<div class="space-y-2">
						<h5 class="group-hover:text-secondary text-xl font-semibold text-gray-700 transition">
							Fair & Dynamic Buying
						</h5>
						<p class="text-gray-600">
							🛒 Everyone can buy at launch. <br />
							📉 As more users buy, fewer tokens are distributed per ETH.
						</p>
					</div>
				</div>
			</div>

			<!-- Step 3: Sell Before Cap -->
			<div
				class="group relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
			>
				<div class="relative space-y-8 p-8 py-12">
					<img
						src="https://cdn-icons-png.flaticon.com/512/4341/4341160.png"
						class="w-12"
						alt="Selling process icon"
					/>
					<div class="space-y-2">
						<h5 class="group-hover:text-secondary text-xl font-semibold text-gray-700 transition">
							Sell Anytime Before Cap
						</h5>
						<p class="text-gray-600">
							💰 Sell your share and recover ETH anytime. <br />
							🔐 When market cap reaches <strong>10 ETH</strong>, selling is locked.
						</p>
					</div>
				</div>
			</div>

			<!-- Step 4: Final Buy & Liquidity Burn -->
			<div
				class="group relative bg-gray-50 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
			>
				<div class="relative space-y-8 p-8 py-12 transition duration-300 group-hover:bg-white">
					<img
						src="https://cdn-icons-png.flaticon.com/512/4341/4341025.png"
						class="w-12"
						alt="Final buy phase icon"
					/>
					<div class="space-y-2">
						<h5 class="group-hover:text-secondary text-xl font-semibold text-gray-700 transition">
							Liquidity Burn & Vesting
						</h5>
						<p class="text-gray-600">
							🔥 After 30 minutes, liquidity is <b>permanently burned</b>. <br />
							🔑 Users claim tokens, locked in a <b>10-day vesting</b>.
						</p>
					</div>
				</div>
			</div>
		</div>

		<!--
    <div
      class="mt-16 grid divide-x divide-y divide-gray-100  overflow-hidden rounded-3xl border border-gray-100 text-gray-600  sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4"
    >
      <div class="group relative bg-white  transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div class="relative space-y-8 py-12 p-8">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png"
            class="w-12"
            width="512"
            height="512"
            alt="burger illustration"
          />

          <div class="space-y-2">
            <h5
              class="text-xl font-semibold text-gray-700  transition group-hover:text-secondary"
            >
              First feature
            </h5>
            <p class="text-gray-600 ">
              Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.
            </p>
          </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" />
            </svg>                
        </div>
      </div>
      <div class="group relative bg-white  transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div class="relative space-y-8 py-12 p-8">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4341/4341134.png"
            class="w-12"
            width="512"
            height="512"
            alt="burger illustration"
          />

          <div class="space-y-2">
            <h5
              class="text-xl font-semibold text-gray-700 transition group-hover:text-secondary"
            >
              Second feature
            </h5>
            <p class="text-gray-600 ">
              Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.
            </p>
          </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" />
            </svg>                
        </div>
      </div>
      <div class="group relative bg-white  transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div class="relative space-y-8 py-12 p-8">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4341/4341160.png"
            class="w-12"
            width="512"
            height="512"
            alt="burger illustration"
          />

          <div class="space-y-2">
            <h5
              class="text-xl font-semibold text-gray-700  transition group-hover:text-secondary"
            >
              Third feature
            </h5>
            <p class="text-gray-600 ">
              Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.
            </p>
          </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" />
            </svg>                
        </div>
      </div>
      <div
        class="group relative bg-gray-50 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
      >
        <div
          class="relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-white "
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/4341/4341025.png"
            class="w-12"
            width="512"
            height="512"
            alt="burger illustration"
          />

          <div class="space-y-2">
            <h5
              class="text-xl font-semibold text-gray-700  transition group-hover:text-secondary"
            >
              More features
            </h5>
            <p class="text-gray-600 ">
              Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.
            </p>
          </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" />
            </svg>                
        </div>
      </div>
    </div>
-->
	</div>
</div>
