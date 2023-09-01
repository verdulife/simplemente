<script>
	import Home from '$sections/Home.svelte';
	import Presentation from '$sections/Presentation.svelte';
	import Pricing from '$sections/Pricing.svelte';
	/* import Gallery from '$sections/Gallery.svelte'; */
	import Measure from '$sections/Measure.svelte';
	import Contact from '$sections/Contact.svelte';

	import Meta from '$components/global/Meta.svelte';
	import { metadata } from '$lib/meta';
	import { es } from '$lib/ui';

	const data = metadata.es;
</script>

<Meta {data} />

<Home ui={es.home} />
<Presentation ui={es.presentation} />
<Pricing ui={es.pricing} />
<!-- <Gallery /> -->
<Measure ui={es.measure} />
<Contact ui={es.contact} />
