<script>
	/* import { onMount } from 'svelte';

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
	}); */
	
	export let ui;
</script>

<section id="home" class="full">
	<div class="wrapper row jcenter aend full">
		<article class="col jcenter w1/2 w3/4@md hfull">
			<h1><b>{ui.title1} <br /> <i>{ui.title2}</i></b></h1>
			<p><strong>{ui.subtitle1} <span>{ui.subtitle2}</span></strong></p>

			<p>{ui.desc}</p>

			<footer class="row acenter wfull">
				<a role="button" href="/#presentation">{ui.btn1}</a>
				<a role="button" class="unset" href="/#measure">{ui.btn2}</a>
			</footer>
		</article>

		<aside class="imagesWrapper row jcenter aend w1/2 w1/4@md hfull">
			<img height="90%" src="/pantalon.png" alt="Pantalon Mynekung" />
		</aside>
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

		@media (--sm) {
			padding-left: 1.5em;
			padding-bottom: 1.5em;
		}
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
		width: 50%;
		max-width: 200px;

		@media (--sm) {
			width: 80%;
		}

		&:last-of-type {
			@media (--sm) {
				display: none;
			}
		}
	}

	.imagesWrapper {
		position: relative;
		pointer-events: none;

		/* @media (--sm) {
			position: absolute;
			bottom: 0;
			left: 75%;
			height: 100%;
		} */

		& img {
			position: absolute;

			@media (--md) {
				left: -50%;
			}

			@media (--sm) {
				left: -100%;
			}
		}
	}
</style>
