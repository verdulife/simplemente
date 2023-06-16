<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const wrapper = document.querySelector('.wrapper');
		const images = [];

		for (let i = 0; i < 120; i++) {
			images[i] = document.createElement('img');
			wrapper.appendChild(images[i]);
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

<section id="home" class="row fcenter full">
	<article class="col w1/2">
		<h1><b>La cintura <br /> ergonomica</b></h1>
		<p><strong>PRESENTADO <span>WAISTLINE_2.0</span> TECHNOLOGY</strong></p>

		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, animi voluptatibus
			mollitia facilis facere incidunt ea sunt. Facilis cumque nam obcaecati vel ipsum vero
			cupiditate tempora batae.
		</p>

		<footer class="row acenter">
			<a role="button" href="/#tech">SABER MÁS</a>
			<a role="button" class="unset" href="/#contact">CONTACTO</a>
		</footer>
	</article>

	<aside class="wrapper row w1/2 hfull" />
</section>

<style lang="postcss">
	section {
		max-width: var(--media-xl);
		margin: 0 auto;
	}

	article {
		gap: 2em;
	}

	h1 {
		color: var(--alt);
		font-size: 100px;
		line-height: 1;
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
		width: 200px;
	}

	.wrapper {
		position: relative;
	}
</style>
