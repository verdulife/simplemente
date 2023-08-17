<script>
	import Home from '$sections/Home.svelte';
	import Presentation from '$sections/Presentation.svelte';
	/* import Gallery from '$sections/Gallery.svelte'; */
	import Pricing from '$sections/Pricing.svelte';
	import Measure from '$sections/Measure.svelte';
	/* import Social from '$sections/Social.svelte'; */
	import Contact from '$sections/Contact.svelte';

	import Meta from '$components/global/Meta.svelte';
	import { metadata } from '$lib/meta';
	import { es } from '$lib/ui';

	const data = metadata.es;
</script>

<Meta {data} />

<Home ui={es.home} />
<Presentation ui={es.presentation} />
<!-- <Gallery /> -->
<Pricing ui={es.pricing} />
<Measure ui={es.measure} />
<!-- <Social /> -->
<Contact ui={es.contact} />
