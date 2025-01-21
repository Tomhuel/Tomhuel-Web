<script lang="ts">
	// TODO: Drop this GithubIcon, just to fill the space
	import Section from '$lib/components/layout/Section.svelte';
	import { CssIcon, HtmlIcon, NodeJsIcon, SvelteIcon, TsIcon, GithubIcon, TailwindCss, ElectronIcon, BootstrapIcon, PhpIcon, LaravelIcon, MysqlIcon, JsIcon, ReactIcon, NextJsIcon, JwtIcon, SqliteIcon, PrismaIcon, DownloadIcon } from '$lib/icons';
	import type { Component } from 'svelte';

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
		icon: Component;
	}

	interface ILink {
		name: string;
		url: string;
		icon: Component;
	}

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
				{ name: 'MySQL', icon: MysqlIcon },
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

	const getProjects = (): IProject[] => {
		return preview ? projects.slice(0, 3) : projects;
	};
</script>

<Section classname="pt-12 md:px-12 2xl:px-60 pb-24 text-white">
	<span class="font-cyber text-3xl">Projects</span>
	<div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
		{#each getProjects() as project}
			<div
				class="mt-8 flex flex-col items-start justify-start rounded-xl border border-white border-opacity-40 bg-zinc-950 p-4 md:p-6"
			>
				<div class="w-100 flex w-full items-center justify-center">
					<img class="w-full rounded-lg" src={project.thumbnail} alt={project.title} />
				</div>
				<div class="flex flex-col items-start justify-between w-full h-full">
					<h3 class="mt-4 text-lg font-semibold">{project.title}</h3>
					<p class="mt-2 text-pretty text-sm font-normal text-gray-500">{project.description}</p>
					<div class="flex flex-col justify-between w-full h-full">
						<div class="mt-4 flex w-full flex-wrap items-center justify-center gap-4">
							{#each project.technologies as technology}
								{@const Technology = technology.icon}
								<Technology width='36' />
							{/each}
						</div>
						<div class="mt-4 flex w-full flex-wrap items-center justify-center gap-4 pt-4">
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
		{/each}
	</div>
	{#if preview}
		<div class="mt-8 flex justify-center">
			<a class="text-sm font-normal text-lightblue hover:scale-110 transition-transform duration-[600ms]" href="/projects"
				>View all projects</a
			>
		</div>
	{/if}
</Section>
