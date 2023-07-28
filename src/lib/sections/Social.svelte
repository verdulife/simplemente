<script>
	import Image from '../components/global/Image.svelte';

	import { ui } from '$lib/ui';
	import { Lang } from '$lib/stores';

	$: social = ui[$Lang].social;
</script>

<section id="social" class="row fcenter wfull">
	<div class="wrapper row fcenter wfull">
		<article class="col acenter wfull">
			<h2 class="tcenter wfull">
				<b>{social.title1} <i>{social.title2}</i>.</b>
			</h2>
		</article>
	</div>
</section>

<style lang="postcss">
	.wrapper {
		max-width: var(--media-xl);
		margin: 0 auto;
		padding: 10em 2em;
	}

	article {
		gap: 4em;
	}

	h2 {
		max-width: 900px;
		font-size: var(--font-lg);
		color: var(--alt);

		& i {
			color: var(--accent);
			font-style: normal;
		}
	}
</style>
