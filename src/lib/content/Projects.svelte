<script lang="ts">
	// TODO: Drop this GithubIcon, just to fill the space
	import Section from '$lib/components/layout/Section.svelte';
	import ProjectCard from '$lib/components/ui/ProjectCard/ProjectCard.svelte';
	import { PROJECTS } from '$lib/data/projects';
	import { onMount } from 'svelte';

	let { preview = true } = $props();

	let visibleCount = $state(3);

	const updateVisibleCount = () => {
		const width = window.innerWidth;
		if (width >= 1536) {
			visibleCount = 3; // 2xl
		} else if (width >= 1024) {
			visibleCount = 4; // md
		}
	};

	onMount(() => {
		updateVisibleCount();
		window.addEventListener('resize', updateVisibleCount);
	});
</script>

<Section classname="pt-12 md:px-12 2xl:px-60 pb-24 text-white">
	<span class="font-cyber text-3xl">Projects</span>
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 2xl:grid-cols-3">
		{#each preview ? PROJECTS.slice(0, visibleCount) : PROJECTS as project}
			<ProjectCard {preview} {project}></ProjectCard>
		{/each}
	</div>
	{#if preview}
		<div class="mt-8 flex justify-center">
			<a
				class="text-sm font-normal text-lightblue transition-transform duration-[600ms] hover:scale-110"
				href="/projects">View all projects</a
			>
		</div>
	{/if}
</Section>
