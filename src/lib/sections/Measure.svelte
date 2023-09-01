<script>
	import Image from '../components/global/Image.svelte';

	export let ui;
</script>

<section id="measure" class="row fcenter wfull">
	<div class="wrapper row fcenter wfull">
		<article class="col acenter wfull">
			<header class="col acenter wfull">
				<h2 class="tcenter wfull">
					<b>{ui.desc1} <i>{ui.desc2}</i> {ui.desc3} <i>{ui.desc4}</i>.</b>
				</h2>

				<a role="button" href="/user-guide.pdf" target="_blank">{ui.btn}</a>
			</header>

			<span class="xdiv" />

			<main class="row fcenter wfull wrap">
				<div class="img-wrapper col acenter w1/2 wfull@sm">
					<picture>
						<Image width="100%" src="/model-mynekung.png" alt="Modelo Mynekung" />
					</picture>

					<footer class="col acenter wfull">
						<small>{ui.model_label}</small>
						<h3 class="tcenter"><b>Mynekung</b></h3>
					</footer>
				</div>

				<div class="img-wrapper col acenter w1/2 wfull@sm">
					<picture>
						<Image width="100%" src="/model-tarzan-movement.png" alt="Modelo Tarzan Movement" />
					</picture>

					<footer class="col acenter wfull">
						<small>{ui.model_label}</small>
						<h3 class="tcenter"><b>Tarzan movement</b></h3>
					</footer>
				</div>
			</main>

			<footer class="col acenter wfull">
				<h2><b>{ui.title_color}</b></h2>

				<div class="row jcenter wfull wrap">
					<div class="color-wrapper col acenter w1/2 wfull@sm">
						<h4><b>Atlantic blue</b></h4>
					</div>

					<div class="color-wrapper col acenter w1/2 wfull@sm">
						<h4><b>Avena</b></h4>
					</div>
				</div>
			</footer>
		</article>
	</div>
</section>

<style lang="postcss">
	.wrapper {
		max-width: var(--media-xl);
		margin: 0 auto;
		padding: 10em 2em;
	}

	header {
		gap: 2em;

		@media (--sm) {
			gap: 1em;
		}
	}

	a[role='button'] {
		min-width: 180px;
		background-color: var(--accent);
		color: var(--base);
	}

	main {
		gap: 2em;
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

	.img-wrapper {
		position: relative;
		max-width: 400px;

		& picture {
			clip-path: polygon(
				2em 0%,
				100% 0,
				100% calc(100% - 2em),
				calc(100% - 2em) 100%,
				0 100%,
				0 2em
			);
		}

		& footer {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			transition: 600ms ease;
		}

		& small {
			background-color: var(--accent);
			color: var(--base);
			font-family: var(--font-title);
			font-size: var(--font-sm);
			line-height: 1;
			white-space: nowrap;
			border-radius: 0.75em;
			padding: 0.25em 1em 0.5em 1em;
			z-index: 1;
		}

		& h3 {
			color: var(--base);
			font-size: var(--font-2xl);
			line-height: 1;
		}

		&:hover footer {
			opacity: 0;
		}
	}

	article > footer {
		gap: 2em;

		& div {
			gap: 2em;
		}
	}

	.color-wrapper {
		max-width: 300px;
		background-color: #fafafa;
		padding: 2em;
		clip-path: polygon(2em 0%, 100% 0, 100% calc(100% - 2em), calc(100% - 2em) 100%, 0 100%, 0 2em);

		&:first-of-type {
			background-color: var(--alt);

			& h4 {
				line-height: 1;
				color: var(--base);
			}
		}

		&:last-of-type {
			background-color: #d9af87;

			& h4 {
				line-height: 1;
				color: var(--alt);
			}
		}
	}
</style>
