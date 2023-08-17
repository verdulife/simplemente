<script>
  export let ui;
</script>

<section id="pricing" class="wfull">
	<div class="wrapper col fcenter full">
		<article class="col acenter wfull">
			<h2 class="tcenter">
				<b>
					{ui.title1}
					<br />
					<i>{ui.title2}</i>
				</b>
			</h2>

			<span class="xdiv" />

			<p class="tcenter">{@html ui.desc}</p>
		</article>

		<footer class="row fcenter wrap wfull">
			<div class="border grow">
				<h4 class="tcenter">
					<b>
						{ui.mynekung_title}
						<br />
						<strong>{ui.mynekung_price}</strong>
					</b>
				</h4>
			</div>

			<div class="border grow">
				<h4 class="tcenter">
					<b>
						{ui.tarzan_title}
						<br />
						<strong>{ui.tarzan_price}</strong>
					</b>
				</h4>
			</div>
		</footer>
	</div>
</section>

<style lang="postcss">
	section {
		background-color: var(--accent);
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
			color: var(--alt);
			font-style: normal;
		}
	}

	.xdiv {
		width: 20%;
		background-color: var(--base);
	}

	p {
		text-align: center;
		color: var(--base);
		max-width: 900px;
	}

	footer {
		max-width: var(--media-md);
		gap: 1em;
	}

	.border {
		background-color: var(--base);
		clip-path: polygon(
			0.75rem 0%,
			100% 0,
			100% calc(100% - 0.75rem),
			calc(100% - 0.75em) 100%,
			0 100%,
			0 0.75rem
		);
		padding: 3px;
	}

	h4 {
		color: var(--base);
		font-size: var(--font-md);
		background-color: var(--accent);
		clip-path: polygon(
			0.75rem 0%,
			100% 0,
			100% calc(100% - 0.75rem),
			calc(100% - 0.75rem) 100%,
			0 100%,
			0 0.75rem
		);
		padding: 1em 2em;
	}

	strong {
		font-size: var(--font-xl);
	}
</style>
