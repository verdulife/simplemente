<script>
	import Meta from '$components/global/Meta.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		const video = document.querySelector('video');

		let time = 0;

		setInterval(() => {
			video.currentTime = time;
		}, 250);

		function seek(e) {
			time = (e.clientX * video.duration) / window.innerWidth;
			console.log(time);
		}

		window.addEventListener('mousemove', seek);
	});
</script>

<!-- <Meta data={home} /> -->

<section id="home" class="row fend full">
	<video src="/header-low.mp4" playsinline muted />
</section>

<section id="tech" />

<style lang="postcss">
	video {
		mix-blend-mode: multiply;
	}
</style>
