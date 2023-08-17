<script>
	import Home from '$sections/Home.svelte';
	import Presentation from '$sections/Presentation.svelte';
	import Pricing from '$sections/Pricing.svelte';
	import Measure from '$sections/Measure.svelte';
	/* import Social from '$sections/Social.svelte'; */
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
<Measure ui={en.measure} />
<!-- <Social /> -->
<Contact ui={en.contact} />
