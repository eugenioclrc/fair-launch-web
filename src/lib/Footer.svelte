<script>
	export let year = new Date().getFullYear();
</script>

<footer class="py-20 md:py-40">
	<div class="container mx-auto border-t border-gray-500 px-4 pt-4">
		<div class="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
			<div class="flex flex-wrap items-center justify-between md:flex-nowrap">
				<div class="flex w-full justify-center space-x-12 text-gray-600 sm:w-7/12 md:justify-start">
					<ul class="list-inside list-disc space-y-8">
						<li><a href="/" class="hover:text-primary transition">Home</a></li>
					</ul>
				</div>

				<div class="m-auto mt-16 w-10/12 space-y-6 text-center sm:mt-auto sm:w-5/12 sm:text-left">
					<span class="block text-gray-500">Fair and free token launch</span>
					<span class="block text-gray-500">CryptoBros &copy; {year}</span>
					<span class="flex justify-between text-gray-600">
						<a href="#" class="font-medium">Terms of Use </a>
						<a href="#" class="font-medium"> Privacy Policy</a>
					</span>
					<span class="block text-gray-500"
						>Need help? <a href="#" class="font-semibold text-gray-600"> Contact Us</a></span
					>
				</div>
			</div>
		</div>
	</div>
</footer>
