<script lang="ts">
	// TODO: Drop this GithubIcon, just to fill the space
	import Section from '$lib/components/layout/Section.svelte';
	import ProjectCard from '$lib/components/ui/ProjectCard/ProjectCard.svelte';
	import { getTranslatedProjects } from '$lib/data/projects-i18n';
	import { onMount } from 'svelte';
	import { language } from '$lib/stores/language';
	import { getTranslation } from '$lib/i18n/translations';

	const currentLang = $derived($language);
	
	function t(key: string) {
		return getTranslation(currentLang, key);
	}

	let { preview = true } = $props();

	let visibleCount = $state(3);

	const updateVisibleCount = () => {
		const width = window.innerWidth;
		if (width >= 1536) {
			visibleCount = 2; // 2xl
		} else if (width >= 1024) {
			visibleCount = 4; // md
		}
	};

	onMount(() => {
		updateVisibleCount();
		window.addEventListener('resize', updateVisibleCount);
	});

	const projectsTitle = $derived(t('projectDetails.title'));
	const viewAllText = $derived(t('projectDetails.viewAll'));
	const projects = $derived(getTranslatedProjects(t));
</script>

<Section classname="pt-12 md:px-12 2xl:px-60 pb-24 text-white">
	<span class="font-cyber text-3xl">{projectsTitle}</span>
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
		{#each preview ? projects.slice(0, visibleCount) : projects as project}
			<ProjectCard {preview} {project}></ProjectCard>
		{/each}
	</div>
	{#if preview}
		<div class="mt-8 flex justify-center">
			<a
				class="text-sm font-normal text-lightblue transition-transform duration-[600ms] hover:scale-110"
				href="/projects">{viewAllText}</a
			>
		</div>
	{/if}
</Section>
