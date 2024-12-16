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
				'Estamos desarrollando un producto con objetivo de fomentar la reducción de obesidad, mejora de hábitos saludables, reciclaje y muchas cosas más con nuestros juegos interactivos y educativos. Las tecnologías utilizadas en este trabajo son: Wordpress, PHP, Bootstrap 5, Webpack, JavaScript y diversas librerías.',
			link: 'https://healthyfun.app/'
		},
		{
			startDate: 'March 2023',
			endDate: 'May 2023',
			company: '',
			title: 'FullStack Developer',
			description:
				'Mi experiencia en eAgora es la culminación de mis primeros años de formación profesional. He desarrollado tareas como desarrollador FullStack, formando parte de un equipo diverso y dinámico, que trabaja para el desarrollo de herramientas innovadoras puestas al servicio de la sociedad.',
			link: '#'
		},
		{
			startDate: 'October 2017',
			endDate: 'Currently',
			company: 'Entrenando Cerebritos',
			title: 'Volunteer | Teams Coordinator',
			description:
				'Colaborando con la asociación de inteligencias múltiples Cerebritos desde los 14 años. He hecho de monitor en múltiples actividades con niños y jóvenes relacionados con las inteligencias y tecnologías cómo la robótica. Co-diseño, organización, ejecución de talleres y formación son solo algunas de mis funciones en esta asociación.'
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
				<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
					{experience.description}
				</p>
				{#if experience.link}
					<a
						href={experience.link}
						class="focus:text-light inline-flex items-center rounded-lg border border-gray-600 bg-gray-800 px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-700 hover:text-lightblue focus:z-10 focus:outline-none focus:ring-1 focus:ring-lightblue"
						>See more...<svg
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
