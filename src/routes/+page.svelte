<script lang="ts">
</script>

<div class="flex flex-col">
	<div class="grid grid-cols-[1fr_2fr] gap-16 px-32 pb-32 pt-16">
		<div class="col-span-1">
			<img
				src="https://avatars.githubusercontent.com/u/90792144"
				class="aspect-square rounded-full object-cover"
				alt=""
			/>
		</div>
		<div class="text-white">
			<h2 class="text-5xl">Orale webonaos</h2>
		</div>
	</div>
	{#each Array(100) as _, index}
		<span class="text-5xl text-white" {...index === 95 ? { id: 'experience' } : {}}>HGola</span>
	{/each}
</div>
