<script lang="ts">
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import '../app.css';
	import type { PageData } from './$types';

	let { children, data }: { data: PageData; children: () => any } = $props();
</script>

<Navbar />

<main class="px-16">
	<div class="bg-animation">
		<div id="stars"></div>
		<div id="stars2"></div>
		<div id="stars3"></div>
		<div id="stars4"></div>
	</div>
	{@render children()}
</main>
