<script>
	const tabs = [
		{
			title: 'Ajuste preciso',
			desc: 'El ancho de la zona abdominal sujeta sin sentir ningún tipo de presión en esta zona pues el ajuste se da en las crestas iliacas por un cordón de tela que pasa por unas clavillas situadas a los costados, el sobrante de la tela se dobla en forma de S entre la cresta iliaca y el abdomen sin molestia ninguna, una considerable altura en la zona lumbar hace el resto, que la tela sostenga en vez sentir presión, sintiendo un agradable abrazo que sujeta el pantalón a nuestro torso.',
			image1: '',
			image2: '',
			image3: ''
		},
		{
			title: 'Entrepierna',
			desc: 'El ancho de la zona abdominal sujeta sin sentir ningún tipo de presión en esta zona pues el ajuste se da en las crestas iliacas por un cordón de tela que pasa por unas clavillas situadas a los costados, el sobrante de la tela se dobla en forma de S entre la cresta iliaca y el abdomen sin molestia ninguna, una considerable altura en la zona lumbar hace el resto, que la tela sostenga en vez sentir presión, sintiendo un agradable abrazo que sujeta el pantalón a nuestro torso.',
			image1: '',
			image2: '',
			image3: ''
		},
		{
			title: 'Tobillo',
			desc: 'El ancho de la zona abdominal sujeta sin sentir ningún tipo de presión en esta zona pues el ajuste se da en las crestas iliacas por un cordón de tela que pasa por unas clavillas situadas a los costados, el sobrante de la tela se dobla en forma de S entre la cresta iliaca y el abdomen sin molestia ninguna, una considerable altura en la zona lumbar hace el resto, que la tela sostenga en vez sentir presión, sintiendo un agradable abrazo que sujeta el pantalón a nuestro torso.',
			image1: '',
			image2: '',
			image3: ''
		}
	];

	$: tabIndex = 0;
	$: tab = tabs[tabIndex];
</script>

<section id="tech" class="row fcenter full">
	<article class="col w1/2">
		<ul class="row">
			<li>
				<button on:click={() => (tabIndex = 0)}>CADERA</button>
			</li>
			<li>
				<button on:click={() => (tabIndex = 1)}>ENTRPIERNA</button>
			</li>
			<li>
				<button on:click={() => (tabIndex = 2)}>TOBILLO</button>
			</li>
		</ul>

		<main>
			<h2>{tab.title}</h2>
			<p>{tab.desc}</p>
		</main>

		<footer class="row">
			<img src={tab.image1} alt="image 1" />
			<img src={tab.image2} alt="image 2" />
		</footer>
	</article>

	<aside class="wrapper row w1/2 hfull" />
</section>

<style lang="postcss">
	section {
		max-width: var(--media-xl);
		margin: 0 auto;
	}

	article {
		gap: 2em;
	}

	h1 {
		color: var(--alt);
		font-size: 100px;
		line-height: 1;
	}

	strong {
		position: relative;
		font-family: var(--font-code);

		& span {
			color: var(--accent);
		}

		&:before {
			content: '';
			position: absolute;
			bottom: -1em;
			right: -1em;
			width: 1000px;
			height: 1px;
			background-color: var(--alt);
		}
	}

	p {
		max-width: 600px;
	}

	a[role='button'] {
		width: 200px;
	}

	.wrapper {
		position: relative;
	}
</style>
