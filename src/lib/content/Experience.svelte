<script lang="ts">
	import Section from '$lib/components/layout/Section.svelte';
	import { isMenuExpanded } from '$lib/stores/expanded';
	import { language } from '$lib/stores/language';
	import { getTranslation } from '$lib/i18n/translations';

	const currentLang = $derived($language);

	function t(key: string) {
		return getTranslation(currentLang, key);
	}

	interface IExperience {
		startDate: string;
		endDate: string;
		company: string;
		title: string;
		description: string;
		link?: string;
	}

	const experience1_startDate = $derived(`${t('common.months.december')} 2025`);
	const experience1_endDate = $derived(t('common.present'));
	const experience1_title = $derived(t('experience.items.luckyHelados.title'));
	const experience1_description = $derived(t('experience.items.luckyHelados.description'));

	const experience2_startDate = $derived(`${t('common.months.september')} 2025`);
	const experience2_endDate = $derived(`${t('common.months.december')} 2025`);
	const experience2_title = $derived(t('experience.items.dominos.title'));
	const experience2_description = $derived(t('experience.items.dominos.description'));

	const experience3_startDate = $derived(`${t('common.months.may')} 2024`);
	const experience3_endDate = $derived(`${t('common.months.february')} 2025`);
	const experience3_title = $derived(t('experience.items.healthyFun.title'));
	const experience3_description = $derived(t('experience.items.healthyFun.description'));

	const experience4_startDate = $derived(`${t('common.months.march')} 2023`);
	const experience4_endDate = $derived(`${t('common.months.may')} 2023`);
	const experience4_title = $derived(t('experience.items.eagora.title'));
	const experience4_description = $derived(t('experience.items.eagora.description'));

	const experience5_startDate = $derived(`${t('common.months.october')} 2017`);
	const experience5_endDate = $derived(t('common.present'));
	const experience5_title = $derived(t('experience.items.cerebritos.title'));
	const experience5_description = $derived(t('experience.items.cerebritos.description'));

	const experiences = $derived([
		{
			startDate: experience5_startDate,
			endDate: experience5_endDate,
			company: 'Cerebritos',
			title: experience5_title,
			description: experience5_description,
			link: 'https://cerebritos.org'
		},
		{
			startDate: experience1_startDate,
			endDate: experience1_endDate,
			company: 'Lucky Helados',
			title: experience1_title,
			description: experience1_description
		},
		{
			startDate: experience2_startDate,
			endDate: experience2_endDate,
			company: "Domino's Pizza",
			title: experience2_title,
			description: experience2_description,
			link: 'https://www.dominospizza.es/'
		},
		{
			startDate: experience3_startDate,
			endDate: experience3_endDate,
			company: 'Healthy Fun Tech S.L',
			title: experience3_title,
			description: experience3_description,
			link: 'https://healthyfun.app/'
		},
		{
			startDate: experience4_startDate,
			endDate: experience4_endDate,
			company: 'eAgora Algoritmo del Cambio',
			title: experience4_title,
			description: experience4_description,
			link: 'https://eagora.app'
		}
	]);

	const experienceTitle = $derived(t('experience.title'));
	const seeMoreText = $derived(t('common.seeMore'));
</script>

<Section classname="pt-0 md:px-12 2xl:px-60">
	<span class="font-cyber text-3xl text-white" id="experience">{experienceTitle}</span>
	<ol
		class="relative mt-4 border-s border-lightblue border-opacity-25 {$isMenuExpanded
			? '-z-10'
			: 'z-0'} lg:z-0"
	>
		{#each experiences as experience}
			<li class="mb-10 ms-4">
				<div
					class="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-gray-900 bg-lightblue"
				></div>
				<time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
					>{experience.startDate} - {experience.endDate}</time
				>
				<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
					{experience.title}
				</h3>
				<h4 class="mb-2 text-gray-200">{experience.company}</h4>
				<p class="mb-4 text-pretty text-base font-normal text-gray-500 dark:text-gray-400">
					{experience.description}
				</p>
				{#if experience.link}
					<a
						href={experience.link}
						target="_blank"
						class="focus:text-light inline-flex items-center rounded-lg border border-gray-600 px-4 py-2 text-sm font-medium text-gray-400 transition-[color] duration-700 hover:bg-zinc-900 hover:text-lightblue focus:z-10 focus:outline-none focus:ring-1 focus:ring-lightblue"
						>See more<svg
							class="ms-2 h-3 w-3 rtl:rotate-180"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 10"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 5h12m0 0L9 1m4 4L9 9"
							/>
						</svg></a
					>
				{/if}
			</li>
		{/each}
	</ol>
</Section>
