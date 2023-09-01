<script>
	import Picture from '../components/Picture.svelte';

	export let ui;
</script>

<section id="presentation" class="wfull">
	<div class="wrapper col fcenter full">
		<Picture src="/gallery/move-free.jpg" alt="{ui.title1} {ui.title2}" />

		<article class="col acenter wfull">
			<h2 class="tcenter">
				<b>{ui.title1} <br /> {ui.title2} <i>{ui.title3}</i></b>
			</h2>

			<span class="xdiv" />

			<p class="tcenter">{@html ui.desc}</p>
		</article>

		<Picture src="/gallery/stay-free.jpg" alt="{ui.title1} {ui.title2}" />
	</div>
</section>

<style lang="postcss">
	section {
		background-color: var(--alt);
	}

	.wrapper {
		max-width: var(--media-xl);
		gap: 4em;
		margin: 0 auto;
		padding: 10em 2em;
	}

	article {
		gap: 4em;
	}

	h2 {
		font-size: var(--font-2xl);
		color: var(--base);
		line-height: 1;

		& i {
			color: var(--accent);
			font-style: normal;
		}
	}

	.xdiv {
		width: 20%;
		background-color: var(--base);
	}

	p {
		text-align: center;
		color: var(--base-300);
		max-width: 900px;
	}
</style>
