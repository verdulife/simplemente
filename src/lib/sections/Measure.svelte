<script>
	import Play from '$lib/icons/Play.svelte';

	let paused = true;
	let volume = 1;

	function playPause() {
		paused = !paused;
	}
</script>

<section id="measure" class="row fcenter wfull">
	<div class="wrapper row fcenter full">
		<article class="col acenter wfull">
			<h2 class="tcenter">
				<b>
					Si estas realmente interesado en conseguir uno de nuestros modelos, rellena el <i
						>formulario</i
					>
					que encontraras más abajo.
				</b>
			</h2>

			<span class="xdiv" />

			<header class="col acenter wfull">
				<h3><b>Como tomar <i>medidas</i></b></h3>
				<p>
					Para tomar correctamente las medidas, visuliza el video explicativo o descargate el PDF.
				</p>
			</header>

			<main class="row jevenly acenter wfull">
				<div class="video-wrapper">
					<video
						class="full"
						src="/medicion.mp4"
						playsinline
						bind:paused
						bind:volume
						on:click={playPause}
					/>

					{#if paused}
						<figure class="row fcenter full" on:click={playPause}>
							<Play />
						</figure>
					{/if}
				</div>

				<span class="ydiv" />

				<a role="button" href="/instrucciones.pdf" target="_blank">DESCARGAR PDF</a>
			</main>

			<footer>footer</footer>
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

	h3 {
		font-size: var(--font-2xl);
		color: var(--alt);

		& i {
			color: var(--accent);
			font-style: normal;
		}
	}

	p {
		text-align: center;
		max-width: 900px;
	}

	a[role='button'] {
		background-color: var(--accent);
		color: var(--base);
	}

	.ydiv {
		height: 200px;
		background-color: var(--base-900);
	}

	.video-wrapper {
		position: relative;
		width: 300px;
		aspect-ratio: 9/14;
		border-radius: 1em;
		overflow: hidden;

		& figure {
			cursor: pointer;
			position: absolute;
			inset: 0;
		}
	}
</style>
