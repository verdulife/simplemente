<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const imagesWrapper = document.querySelector('.imagesWrapper');
		const images = [];

		for (let i = 0; i < 47; i++) {
			images[i] = document.createElement('img');
			imagesWrapper.appendChild(images[i]);
			images[i].src = `/header/${i + 1}.png`;
			images[i].style.cssText = `
				position: absolute;
				bottom: 0;
				height: 90%;
				mix-blend-mode: multiply;
				opacity: 0;
			`;
		}

		images[5].style.opacity = 1;

		function seek(e) {
			const time = Math.ceil((e.clientX * 46) / window.innerWidth);
			images.forEach((img) => (img.style.opacity = '0'));

			images[time].style.opacity = 1;
		}

		window.addEventListener('mousemove', seek);
	});
</script>

<section id="home" class="full">
	<div class="wrapper row col@md fcenter jend@md full">
		<article class="col w1/2 wfull@md">
			<h1><b>muevete <br /> <i>libremente</i></b></h1>
			<p><strong>PRESENTANDO <span>SIMPLE-MENTE</span> TECH</strong></p>

			<p>
				Un pantalón práctico, de carácter minimalista ideal para todas aquellas personas que
				aprecian sentirse cómodos, en todo momento, que les gusta moverse sin limitaciones y
				prefieren calidad frente a cantidad.
			</p>

			<footer class="row acenter">
				<a role="button" href="/#presentation">SABER MÁS</a>
				<a role="button" class="unset" href="/#contact">CONTACTO</a>
			</footer>
		</article>

		<aside class="imagesWrapper row jcenter w1/2 wfull@md hfull h1/3@md" />
	</div>
</section>

<style lang="postcss">
	.wrapper {
		max-width: var(--media-xl);
		margin: 0 auto;
	}

	article {
		gap: 2em;
		padding: 2em;
	}

	h1 {
		color: var(--alt);
		font-size: var(--font-3xl);
		line-height: 1;

		& i {
			color: var(--accent);
			font-style: normal;
		}
	}

	strong {
		position: relative;
		font-family: var(--font-code);

		& span {
			color: var(--accent);
		}

		&:before {
			content: '';
			position: absolute;
			bottom: -1em;
			right: -1em;
			width: 1000px;
			height: 1px;
			background-color: var(--alt);
		}
	}

	p {
		max-width: 600px;
	}

	a[role='button'] {
		width: 180px;
	}

	.imagesWrapper {
		position: relative;
	}
</style>
