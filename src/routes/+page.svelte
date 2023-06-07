<script>
	import Meta from '$components/global/Meta.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		const wrapper = document.querySelector('.wrapper');
		const images = [];

		for (let i = 0; i < 52; i++) {
			images[i] = document.createElement('img');
			wrapper.appendChild(images[i]);
			images[i].src = `/header/${i + 1}-min.png`;
			images[i].style.cssText = `
				position: absolute;
				bottom: 0;
				left: 0;
				height: 80%;
				mix-blend-mode: multiply;
				opacity: 0;
			`;
		}

		function seek(e) {
			const time = Math.ceil((e.clientX * 51) / window.innerWidth);
			images.forEach((img) => (img.style.opacity = '0'));

			images[time].style.opacity = 1;
		}

		window.addEventListener('mousemove', seek);
	});
</script>

<!-- <Meta data={home} /> -->

<section id="home" class="row fcenter full">
	<h1><b>cintura <br /> ergonomica</b></h1>
	<div class="wrapper row w1/2 hfull" />

	<div class="grad row" />
</section>

<section id="tech" />

<style lang="postcss">
	.wrapper {
		position: relative;
		margin-left: -20em;
	}

	h1 {
		font-size: 120px;
		line-height: 1;
	}

	.grad {
		position: absolute;
		bottom: 0;
		width: 300%;
		height: 300px;
		background: radial-gradient(ellipse at bottom, var(--base), transparent 50%);
		z-index: 2;
	}
</style>
