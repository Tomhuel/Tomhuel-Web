<script lang="ts">
	const { width = '24', height = width, fill = '#fff' } = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	{width}
	{height}
	viewBox="0 0 24 24"
	{fill}
	stroke={fill}
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	class="lucide lucide-circle"><circle cx="12" cy="12" r="10" /></svg
>
