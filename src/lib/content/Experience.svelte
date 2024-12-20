<script lang="ts">
	import Section from '$lib/components/layout/Section.svelte';
	import { isMenuExpanded } from '$lib/stores/expanded';

	interface IExperience {
		startDate: string;
		endDate: string;
		company: string;
		title: string;
		description: string;
		link?: string;
	}

	const experiences: IExperience[] = [
		{
			startDate: 'May 2024',
			endDate: 'Currently',
			company: 'Healthy Fun Tech S.L',
			title: 'Web Developer',
			description:
				'We\'re developing a product with the aim of promoting the reduction of obesity, improving healthy habits, recycling and many other things with our interactive and educational games. I\'m the developer that did most of the app, website and deploy. The technologies used in this work are: Wordpress, PHP, MySQL, OpenLiteSpeed, Bootstrap 5, Webpack, JavaScript and various libraries.',
			link: 'https://healthyfun.app/'
		},
		{
			startDate: 'March 2023',
			endDate: 'May 2023',
			company: 'eAgora Algoritmo del Cambio',
			title: 'FullStack Developer',
			description:
				'My experience in eAgora is the culmination of my first years of professional training. I have developed tasks as a FullStack developer, being part of a diverse and dynamic team, working for the development of innovative tools at the service of society. The technologies used in this work are: PHP, Bootstrap 5, Laravel, Livewire & MySQL.',
			link: 'https://eagora.app'
		},
		{
			startDate: 'October 2017',
			endDate: 'Currently',
			company: 'Entrenando Cerebritos',
			title: 'Volunteer | Teams Coordinator',
			description:
				'Colaborating with the association of multiple intelligences Cerebritos since I was 14 years old. I have been a monitor in multiple activities with children and young people related to intelligences and technologies such as robotics. Co-design, organization, execution of workshops and training are just some of my functions in this association.',
		}
	];
</script>

<Section classname="pt-0 md:px-12 2xl:px-60">
	<span class="font-cyber text-3xl text-white" id="experience">Experience</span>
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
				<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 text-pretty">
					{experience.description}
				</p>
				{#if experience.link}
					<a
						href={experience.link}
						target="_blank"
						class="focus:text-light inline-flex items-center rounded-lg border border-gray-600  px-4 py-2 text-sm font-medium text-gray-400 hover:bg-zinc-900 hover:text-lightblue focus:z-10 focus:outline-none focus:ring-1 focus:ring-lightblue transition-[color] duration-700"
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
