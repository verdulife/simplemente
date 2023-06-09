<script>
	import '$lib/startcss/startcss.css';

	import Cookies from '$components/global/Cookies.svelte';
	import Nav from '$components/global/Nav.svelte';
	import Tagline from '$components/Tagline.svelte';
</script>

<main class="scrollbar">
	<Nav />
	<Tagline />
	<slot />
</main>

<Cookies />

<style lang="postcss">
	main {
		background-color: var(--base);
		background-image: url('/bg.png');
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
