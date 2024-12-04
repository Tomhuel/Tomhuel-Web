<script>
	import { page } from '$app/stores';
</script>

<h1 class="text-5xl text-white">Page Error: {$page?.error?.message}</h1>
