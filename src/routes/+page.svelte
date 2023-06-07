<script>
	import Meta from '$components/global/Meta.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		const video = document.querySelector('video');
		const durationMs = video.duration * 1000;
		let timeMs;

		function seek(e) {
			const { clientX } = e;
			const { innerWidth } = window;
			timeMs = (clientX * durationMs) / innerWidth;
		}

		const loop = setTimeout(() => {
			video.currentTime = (timeMs / 1000).toFixed(2);
		}, 100);

		window.addEventListener('mousemove', seek);
	});
</script>

<!-- <Meta data={home} /> -->

<section id="home" class="row fend full">
	<video src="/header.webm" playsinline muted />
</section>

<section id="tech" />

<style lang="postcss">
	video {
		background: transparent !important;
	}
</style>
