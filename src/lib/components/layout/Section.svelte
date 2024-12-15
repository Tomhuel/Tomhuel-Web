<script lang="ts">
	const { children = () => {}, classname = '' } = $props();
</script>

<section class="pt-16 md:px-12 lg:px-24 lg:pb-32 {classname}">
	{@render children()}
</section>
