<script>
	import Image from '../components/global/Image.svelte';

	import { ui } from '$lib/ui';
	import { Lang } from '$lib/stores';

	$: measure = ui[$Lang].measure;
</script>

<section id="measure" class="row fcenter wfull">
	<div class="wrapper row fcenter wfull">
		<article class="col acenter wfull">
			<h2 class="tcenter wfull">
				<b>{measure.desc1} <i>{measure.desc2}</i> {measure.desc3} <i>{measure.desc4}</i>.</b>
			</h2>

			<main class="row col@md jevenly acenter wfull">
				<a role="button" href="/user-guide.pdf" target="_blank">{measure.btn}</a>
			</main>

			<span class="xdiv" />

			<footer class="row fcenter wfull">
				<picture>
					<Image width="100%" src="/mynekung.jpg" />
				</picture>

				<picture>
					<Image width="100%" src="/tarzan-movement.jpg" />
				</picture>
			</footer>

			<picture>
				<Image width="100%" src="/colores.png" />
			</picture>
		</article>
	</div>
</section>

<style lang="postcss">
	.wrapper {
		max-width: var(--media-xl);
		margin: 0 auto;
		padding: 10em 2em;
	}

	article {
		gap: 4em;
	}

	h2 {
		max-width: 900px;
		font-size: var(--font-lg);
		color: var(--alt);

		& i {
			color: var(--accent);
			font-style: normal;
		}
	}

	.xdiv {
		width: 20%;
		background-color: var(--base-900);
	}

	footer {
		gap: 2em;

		@media (--sm) {
			gap: 1em;
		}
	}

	footer > picture {
		width: 50%;
		max-width: 400px;
		aspect-ratio: 0.6453362256;
		clip-path: polygon(2em 0%, 100% 0, 100% calc(100% - 2em), calc(100% - 2em) 100%, 0 100%, 0 2em);
	}

	a[role='button'] {
		min-width: 180px;
		background-color: var(--accent);
		color: var(--base);
	}

	main {
		gap: 2em;
	}
</style>
