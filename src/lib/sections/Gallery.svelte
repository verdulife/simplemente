<script>
	import Image from '$components/global/Image.svelte';
	import { onMount } from 'svelte';

	const galleryLength = 10;
	let gallery = [];

	for (let g = 0; g < galleryLength; g++) {
		const image = {
			src: `/gallery/${g}.jpg`,
			alt: `Simple-mente gallery image ${g}`
		};

		gallery = [...gallery, image];
	}

	onMount(() => {
		const gallery = document.querySelector('#gallery');

		setInterval(() => {
			gallery.scrollBy({
				left: 1,
			});
		}, 10);
	});
</script>

<section id="gallery" class="scrollbar" horizontal>
	{#each gallery as { src, alt }}
		<picture>
			<Image width="100%" height="100%" {src} {alt} />
		</picture>
	{/each}
</section>

<style lang="postcss">
	section {
		height: auto;
		background-color: var(--base-900);
		padding: 0.25em 0;
	}

	picture {
		height: 50vh;
		aspect-ratio: 1;
		transform: skew(-3deg);
		margin: 0 0.25em;
	}
</style>
