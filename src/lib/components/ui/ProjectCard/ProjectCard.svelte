<script lang="ts">
	import type { IProject } from '$lib/types/Project';
	const { preview, project }: { preview: boolean; project: IProject } = $props();
</script>

<div
	class="mt-8 flex flex-col items-start justify-start rounded-xl border border-white border-opacity-40 bg-zinc-950 p-4 md:p-6 {preview
		? 'preview-block'
		: ''}"
>
	<div class="w-100 flex w-full items-center justify-center">
		<img class="w-full rounded-lg" src={project.thumbnail} alt={project.title} />
	</div>
	<div class="flex h-full w-full flex-col items-start justify-between mt-4">
		<h3 class="text-lg font-semibold">{project.title}</h3>
		<p class="mt-2 text-pretty text-sm font-normal text-gray-500">{project.description}</p>
		<div class="flex h-full w-full flex-col justify-between">
			<div class="mt-4 flex w-full flex-wrap items-center justify-center gap-4">
				{#each project.technologies as technology}
					{@const Technology = technology.icon}
					<Technology width="36" />
				{/each}
			</div>
			<div class="mt-8 flex w-full flex-wrap items-center justify-center gap-4">
				{#each project.links as link}
					{@const Link = link.icon}
					<a
						href={link.url}
						target="_blank"
						class="focus:text-light inline-flex items-center gap-2 rounded-lg border border-gray-600 px-4 py-2 text-sm font-medium text-gray-400 transition-[color] duration-700 hover:bg-zinc-900 hover:text-lightblue focus:z-10 focus:outline-none focus:ring-1 focus:ring-lightblue"
						><Link />{link.name}</a
					>
				{/each}
			</div>
		</div>
	</div>
</div>
