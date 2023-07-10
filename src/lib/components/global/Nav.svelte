<script>
	import Image from '$components/global/Image.svelte';
</script>

<nav class="col acenter wfull">
	<main class="row jbetween acenter wfull">
		<aside class="row acenter">
			<a href="/">
				<Image width="80px" src="/logo.svg" alt="logo" />
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
	}

	aside {
		gap: 4em;
	}

	ul {
		gap: 4em;
	}

	li > a {
		font-family: var(--font-code);
		transition: 200ms;

		&:hover {
			background-color: var(--alt);
			color: var(--base);
		}
	}
</style>
