<script lang="ts">
	import Section from '$lib/components/layout/Section.svelte';

	let { preview = true } = $props();

	interface IProject {
		title: string;
		thumbnail: string;
		technologies: ITechnology[];
		description: string;
		links: ILink[];
	}

	interface ITechnology {
		name: string;
		icon: string;
	}

	interface ILink {
		name: string;
		url: string;
	}

	const projects: IProject[] = [];

	const getProjects = (): IProject[] => {
		return preview ? projects.slice(0, 3) : projects;
	};
</script>

<Section classname="pt-12">
	<span class="font-cyber text-3xl text-white" id="experience">Projects</span>
	{#each getProjects() as project}
		<div class="mt-8 flex flex-col items-center justify-center">
			<img class="h-40 w-40 rounded-full" src={project.thumbnail} alt={project.title} />
			<h3 class="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
			<p class="mt-2 text-sm font-normal text-gray-400 dark:text-gray-500">{project.description}</p>
			<div class="mt-4 flex">
				{#each project.technologies as technology}
					<img class="h-6 w-6" src={technology.icon} alt={technology.name} />
				{/each}
			</div>
			<div class="mt-4 flex">
				{#each project.links as link}
					<a
						class="text-sm font-normal text-lightblue dark:text-lightblue"
						href={link.url}
						target="_blank">{link.name}</a
					>
				{/each}
			</div>
		</div>
	{/each}
	{#if preview}
		<div class="mt-8 flex justify-center">
			<a class="text-sm font-normal text-lightblue dark:text-lightblue" href="/projects"
				>View all projects</a
			>
		</div>
	{/if}
</Section>
