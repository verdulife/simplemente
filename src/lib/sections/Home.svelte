<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const imagesWrapper = document.querySelector('.imagesWrapper');
		const images = [];

		for (let i = 0; i < 120; i++) {
			images[i] = document.createElement('img');
			imagesWrapper.appendChild(images[i]);
			images[i].src = `/h2/${i + 1}.png`;
			images[i].style.cssText = `
				position: absolute;
				bottom: 0;
				left: -40%;
				height: 80%;
				opacity: 0;
			`;
		}

		images[5].style.opacity = 1;

		function seek(e) {
			const time = Math.ceil((e.clientX * 119) / window.innerWidth);
			images.forEach((img) => (img.style.opacity = '0'));

			images[time].style.opacity = 1;
		}

		window.addEventListener('mousemove', seek);
	});
</script>

<section id="home" class="full">
	<div class="wrapper row fcenter full">
		<article class="col w1/2">
			<h1><b>muevete <br /> <i>libremente</i></b></h1>
			<p><strong>PRESENTANDO <span>SIMPLE-MENTE</span> TECH 2.0</strong></p>

			<p>
				Un pantalón práctico, de carácter minimalista ideal para todas aquellas personas que
				aprecian sentirse cómodos, en todo momento, que les gusta moverse sin limitaciones y
				prefieren calidad frente a cantidad.
			</p>

			<footer class="row acenter">
				<a role="button" href="/#tech">SABER MÁS</a>
				<a role="button" class="unset" href="/#contact">CONTACTO</a>
			</footer>
		</article>

		<aside class="imagesWrapper row w1/2 hfull" />
	</div>
</section>

<section id="endless" class="full">
	<div class="wrapper row fcenter full">
		<article class="col w1/2">
			<h1><b>Cintura ergonómica</b></h1>
			<p><strong>descubre un nuevo <span>movimiento</span></strong></p>

			<p>
				Nuetro diseño soluciona de manera sencilla y elegante el ajuste correcto y ergonómico a toda
				cintura.
				<br /><br />
				<span>Deja de sentir las incomodas limitaciones de los pantalones actúeles</span>
				<br /><br />
				Liberar nuestro centro energético de manera que la respiración y nuestro movimiento natural no
				se vean afectados con un ajuste preciso es una sensación tan agradable que después de probarte
				unos, simpleMENTE te será difícil imaginar que unos pantalones descuiden este propósito.
			</p>
		</article>

		<aside class="wrapper row w1/2 hfull" />
	</div>
</section>

<style lang="postcss">
	.wrapper {
		max-width: var(--media-xl);
		margin: 0 auto;
	}

	#home {
		& h1 {
			color: var(--alt);
			font-size: 100px;
			line-height: 1;

			& i {
				color: var(--accent);
			}
		}

		& strong {
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

		& p {
			max-width: 600px;
		}

		& a[role='button'] {
			width: 200px;
		}
	}

	#endless {
		background-color: var(--alt);

		& h1 {
			color: var(--base);
			font-size: 100px;
			line-height: 1;
		}

		& strong {
			position: relative;
			font-family: var(--font-code);
			color: var(--base);

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

		& p {
			max-width: 600px;
			color: var(--base);
		}
	}

	article {
		gap: 2em;
	}

	.imagesWrapper {
		position: relative;
	}
</style>
