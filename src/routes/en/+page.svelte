<script>
	import Home from '$sections/Home.svelte';
	import Presentation from '$sections/Presentation.svelte';
	import Measure from '$sections/Measure.svelte';
	import Contact from '$sections/Contact.svelte';

	import Meta from '$components/global/Meta.svelte';
	import { metadata } from '$lib/meta';

	const data = metadata.en;
</script>

<Meta {data} />

<Home />
<Presentation />
<Measure />
<Contact />
