<script>
	let videoState = true;
	let volume = 1;

	function playPause() {
		videoState = !videoState;
	}
</script>

<section class="row fcenter full">
	<article class="video-wrapper">
		<video
			class="full"
			src="/medicion.mp4"
			playsinline
			bind:paused={videoState}
			bind:volume
			on:click={playPause}
		/>
	</article>
</section>

<style lang="postcss">
	article {
		width: 300px;
		aspect-ratio: 9/14;
		border-radius: 1em;
		overflow: hidden;
	}
</style>
