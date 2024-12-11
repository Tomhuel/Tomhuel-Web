<script lang="ts">
</script>

<div class="flex flex-col">
	<div class="grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_2fr] grid-cols-1 gap-16 lg:px-24 lg:pb-32 pt-16 md:px-12">
		<div class="col-span-1 md:mx-0 mx-8 flex justify-center">
			<img
				src="https://avatars.githubusercontent.com/u/90792144"
				class="aspect-square rounded-full object-cover"
				alt=""
			/>
		</div>
		<div class="text-white text-center md:text-left">
			<h2 class="text-5xl">Orale webonaos</h2>
		</div>
	</div>
	{#each Array(100) as _, index}
		<span class="text-5xl text-white" {...index === 95 ? { id: 'experience' } : {}}>HGola</span>
	{/each}
</div>
