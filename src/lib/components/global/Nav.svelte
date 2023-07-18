<script>
	import { page } from '$app/stores';
	import { Lang } from '$lib/stores';
	import Image from '$components/global/Image.svelte';

	$: english = $page.route.id === '/en';
	$: english, ($Lang = english ? 'en' : 'es');
</script>

<nav class="col acenter wfull">
	<main class="row jbetween acenter wfull">
		<aside class="row acenter">
			<a href="/">
				<Image width="80px" height="85px" src="/logo.svg" alt="Simple-mente logotipo" />
			</a>

			<!-- <ul class="row acenter">
				<li>
					<a href="/#home">INICIO</a>
				</li>
				<li>
					<a href="/#tech">TECHNOLOGY</a>
				</li>
				<li>
					<a href="/#why">POR QUE</a>
				</li>
				<li>
					<a href="/#testimonials">TESTIMONIALS</a>
				</li>
				<li>
					<a href="/#contact">CONTACTO</a>
				</li>
			</ul> -->
		</aside>

		<!-- <li>
			<a href="mailto:free@simplemente.com">free@simplemente.com</a>
		</li> -->

		{#if english}
			<a href="/">🌍 VER. ESPAÑOLA</a>
		{:else}
			<a href="/en">🌍 ENGLISH VER.</a>
		{/if}
	</main>
</nav>

<style lang="postcss">
	nav {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
	}

	main {
		max-width: var(--media-xl);
		padding: 0 2em;

		& > a {
			background-color: hsl(var(--base-hsl), 0.4);
			backdrop-filter: blur(0.1em);
			font-family: var(--font-code);
			font-weight: bold;
			font-size: var(--font-xs);
			clip-path: polygon(
				0.75em 0%,
				100% 0,
				100% calc(100% - 0.75em),
				calc(100% - 0.75em) 100%,
				0 100%,
				0 0.75em
			);
			transition: 200ms;
			padding: 0.5em 1em;

			&:hover {
				background-color: var(--alt);
				color: var(--base);
			}
		}
	}

	aside {
		gap: 4em;
	}

	/* ul {
		gap: 4em;
	} */
</style>
