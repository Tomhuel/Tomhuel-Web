<script lang="ts">
	const { children = () => {}, classname = '' } = $props();
</script>

<section class="pt-16 md:px-12 lg:px-24 {classname}">
	{@render children()}
</section>
