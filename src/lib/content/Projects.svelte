<script lang="ts">
	// TODO: Drop this GithubIcon, just to fill the space
	import Section from '$lib/components/layout/Section.svelte';
	import ProjectCard from '$lib/components/ui/ProjectCard/ProjectCard.svelte';
	import {
		CssIcon,
		HtmlIcon,
		NodeJsIcon,
		SvelteIcon,
		TsIcon,
		GithubIcon,
		TailwindCss,
		ElectronIcon,
		BootstrapIcon,
		PhpIcon,
		LaravelIcon,
		MysqlIcon,
		JsIcon,
		ReactIcon,
		NextJsIcon,
		JwtIcon,
		SqliteIcon,
		PrismaIcon,
		DownloadIcon,
		JavaIcon,
		SpringIcon,
		PostmanIcon,
		PostgreSqlIcon,
		SwaggerIcon,
		DockerIcon
	} from '$lib/icons';
	import type { IProject } from '$lib/types/Project';

	let { preview = true } = $props();

	const projects: IProject[] = [
		{
			title: 'Tao Mod Manager',
			description:
				"Tao Mod Manager it's a desktop app developer in Electron for inject, manage and execute 3D models in Genshin Impact game.",
			thumbnail: '/thumbnails/tao-mod-manager.png',
			technologies: [
				{ name: 'HTML', icon: HtmlIcon },
				{ name: 'CSS', icon: CssIcon },
				{ name: 'TypeScript', icon: TsIcon },
				{ name: 'Svelte', icon: SvelteIcon },
				{ name: 'NodeJS', icon: NodeJsIcon },
				{ name: 'TailwindCSS', icon: TailwindCss },
				{ name: 'Electron', icon: ElectronIcon }
			],
			links: [
				{
					name: 'Github',
					url: 'https://github.com/Tomhuel/TaoModManager',
					icon: GithubIcon
				},
				{
					name: 'Download',
					url: 'https://github.com/Tomhuel/TaoModManager/releases/latest',
					icon: DownloadIcon
				}
			]
		},
		{
			title: 'Groovebox',
			description:
				"Groovebox it's the final project of my studies. It's a web for download, manage, share and listening mixes produced by DJ's with high quality.",
			thumbnail: '/thumbnails/groovebox.png',
			technologies: [
				{ name: 'HTML', icon: HtmlIcon },
				{ name: 'CSS', icon: CssIcon },
				{ name: 'NodeJS', icon: NodeJsIcon },
				{ name: 'Bootstrap 5', icon: BootstrapIcon },
				{ name: 'PHP', icon: PhpIcon },
				{ name: 'Laravel', icon: LaravelIcon },
				{ name: 'MySQL', icon: MysqlIcon }
			],
			links: [
				{
					name: 'Github',
					url: 'https://github.com/Tomhuel/GrooveBox',
					icon: GithubIcon
				}
			]
		},
		{
			title: 'Cerebritos',
			description:
				"We're developing a platform for children with the purpose of try motivate them to improve with different activities, where they can get codes to redeem and get points to exchange for prizes.",
			thumbnail: '/thumbnails/cerebritos.png',
			technologies: [
				{ name: 'HTML', icon: HtmlIcon },
				{ name: 'CSS', icon: CssIcon },
				{ name: 'JavaScript', icon: JsIcon },
				{ name: 'Bootstrap 5', icon: BootstrapIcon },
				{ name: 'ReactJS', icon: ReactIcon },
				{ name: 'NextJS', icon: NextJsIcon },
				{ name: 'NodeJS', icon: NodeJsIcon },
				{ name: 'Laravel', icon: LaravelIcon },
				{ name: 'MySQL', icon: MysqlIcon },
				{ name: 'JWT', icon: JwtIcon }
			],
			links: [
				{
					name: 'Github',
					url: 'https://github.com/Tomhuel/Cerebritos',
					icon: GithubIcon
				}
			]
		},
		{
			title: "School's API",
			description:
				'API REST with good practices to learn Spring Boot, Spring Data, Spring Security and Postman Integration Tests.',
			thumbnail: '/thumbnails/schoolsapi.png',
			technologies: [
				{ name: 'Java', icon: JavaIcon },
				{ name: 'Spring', icon: SpringIcon },
				{ name: 'PostgreSQL', icon: PostgreSqlIcon },
				{ name: 'Docker', icon: DockerIcon },
				{ name: 'Postman', icon: PostmanIcon },
				{ name: 'Swagger', icon: SwaggerIcon }
			],
			links: [
				{
					name: 'Github',
					url: 'https://github.com/Tomhuel/Schools-API',
					icon: GithubIcon
				}
			]
		},
		{
			title: 'TaoBot',
			description: 'Discord Bot',
			thumbnail: '/thumbnails/taobot.png',
			technologies: [
				{ name: 'TypeScript', icon: TsIcon },
				{ name: 'SQLite', icon: SqliteIcon },
				{ name: 'NodeJS', icon: NodeJsIcon },
				{ name: 'Prisma', icon: PrismaIcon }
			],
			links: [
				{
					name: 'Github',
					url: 'https://github.com/Tomhuel/TaoBot',
					icon: GithubIcon
				}
			]
		}
	];
</script>

<Section classname="pt-12 md:px-12 2xl:px-60 pb-24 text-white">
	<span class="font-cyber text-3xl">Projects</span>
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 2xl:grid-cols-3">
		{#each preview ? projects.slice(0, 4) : projects as project}
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
