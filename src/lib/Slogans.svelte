<script>
	import { onMount } from 'svelte';

	let slogans = [
		'Pump safe. Pump fair. No rugs.',
		'The pump you can trust.',
		'Where pumps stay fair.',
		'Safe pumps, no exit scams.',
		'No rugs, just gains.',
		'A pump you won’t regret.',
		'Rug pulls? Not on my watch.',
		'The only pump that won’t dump you.',
		'We pump, but we don’t rug.',
		'Pump responsibly.',
		'Not your typical degen pump.',
		'DeFi’s first anti-rug pump.',
		'Fair launches, real gains.',
		'Pumping with integrity.',
		'Pump, but fair.',
		'Because DeFi deserves better pumps.'
	];

	let currentSlogan = slogans[0]; // Primer slogan
	let fade = false;

	function changeSlogan() {
		fade = true;
		setTimeout(() => {
			let newSlogan = slogans[Math.floor(Math.random() * slogans.length)];
			if (newSlogan !== currentSlogan) {
				currentSlogan = newSlogan;
				fade = false;
			}
		}, 400); // Tiempo de fade out
	}

	onMount(() => {
		const interval = setInterval(changeSlogan, 3000); // Cambia cada 3 segundos
		return () => clearInterval(interval);
	});
</script>

<span class=" {fade ? 'fade-exit' : 'fade-enter-active'}">
	{currentSlogan}
</span>

<style>
	.fade-exit {
		opacity: 0;
		transform: scale(1.2);
		transition:
			opacity 0.4s ease-in-out,
			transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.fade-enter {
		opacity: 0;
		transform: scale(0.8);
	}

	.fade-enter-active {
		opacity: 1;
		transform: scale(1);
		transition:
			opacity 0.4s ease-in-out,
			transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	}
</style>
