<script>
	import Image from '$components/global/Image.svelte';

	export let src, alt;
</script>

<div class="border row w1/2 wfull@sm">
	<picture class="full">
		<Image width="100%" height="100%" {src} {alt} />
	</picture>
</div>

<style lang="postcss">
	.border {
		aspect-ratio: 4/3;
		padding: 0.25em;
		overflow: hidden;
		clip-path: polygon(
			0.75em 0%,
			100% 0,
			100% calc(100% - 0.75em),
			calc(100% - 0.75em) 100%,
			0 100%,
			0 0.75em
		);

		@media (--sm) {
			aspect-ratio: 1;
		}
	}

	picture {
		clip-path: polygon(
			2em 0%,
			100% 0,
			100% calc(100% - 2em),
			calc(100% - 2em) 100%,
			0 100%,
			0 2em
		);
	}
</style>
