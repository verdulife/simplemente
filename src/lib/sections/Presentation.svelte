<script>
	import { ui } from '$lib/ui';
	import { Lang } from '$lib/stores';

	$: presentation = ui[$Lang].presentation;
</script>

<section id="presentation" class="wfull">
	<div class="wrapper row fcenter full">
		<article class="col acenter wfull">
			<h2 class="tcenter">
				<b>{presentation.title1} <br /> {presentation.title2} <i>{presentation.title3}</i></b>
			</h2>

			<span class="xdiv" />

			<p class="tcenter">{@html presentation.desc}</p>

			<a role="button" href="/#measure">{presentation.btn}</a>
		</article>
	</div>
</section>

<style lang="postcss">
	section {
		background-color: var(--alt);
	}

	.wrapper {
		max-width: var(--media-xl);
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

	a[role='button'] {
		background-color: var(--base);
		color: var(--alt);
	}
</style>
