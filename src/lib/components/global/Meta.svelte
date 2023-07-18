<script>
	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.description} />
	<meta name="keywords" content={data.keywords} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={data.url} />
	<meta property="og:title" content={data.title} />
	<meta property="og:description" content={data.description} />
	<meta property="og:image" content={data.card_image} />
	<meta property="og:image:secure_url" content={data.card_image} />
	<meta property="og:image:type" content="image/png" />

	<!-- Twitter -->
	<meta name="twitter:card" content={data.card_image} />
	<meta name="twitter:site" content={data.url} />
	<meta name="twitter:title" content={data.title} />
	<meta name="twitter:description" content={data.description} />
	<meta name="twitter:image" content={data.image} />
</svelte:head>
