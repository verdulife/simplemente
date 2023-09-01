<script>
	import Home from '$sections/Home.svelte';
	import Presentation from '$sections/Presentation.svelte';
	import Pricing from '$sections/Pricing.svelte';
	/* import Gallery from '$sections/Gallery.svelte'; */
	import Measure from '$sections/Measure.svelte';
	import Contact from '$sections/Contact.svelte';

	import Meta from '$components/global/Meta.svelte';
	import { metadata } from '$lib/meta';
	import { en } from '$lib/ui';

	const data = metadata.en;
</script>

<Meta {data} />

<Home ui={en.home} />
<Presentation ui={en.presentation} />
<Pricing ui={en.pricing} />
<!-- <Gallery /> -->
<Measure ui={en.measure} />
<Contact ui={en.contact} />
