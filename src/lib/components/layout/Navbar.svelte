<script lang="ts">
	import NeonText from '../ui/Neon/NeonText.svelte';
	import {MenuIcon, MailIcon, GithubIcon, LinkedinIcon} from '$lib/icons';
	import type { Component } from 'svelte';
	import { isMenuExpanded } from '$lib/stores/expanded';

	type Link = {
		name: string;
		href: string;
		icon: Component;
		target?: string;
		classes: string;
	};

	const links: Link[] = [
		{
			name: 'Mail',
			href: 'mailto:tomasnahuelantela@gmail.com',
			icon: MailIcon,
			classes: 'bg-transparent'
		},
		{
			name: 'Github',
			href: 'https://github.com/tomhuel',
			icon: GithubIcon,
			target: '_blank',
			classes: 'bg-transparent'
		},
		{
			name: 'Linkedin',
			href: 'https://www.linkedin.com/in/tomhuel/',
			icon: LinkedinIcon,
			target: '_blank',
			classes: 'bg-transparent'
		}
	];

	function expand() {
		isMenuExpanded.set(true);
	}

	function collapse() {
		isMenuExpanded.set(false);
	}
</script>

<header class="sticky left-0 top-0 w-full md:px-16 px-8 py-8 z-10">
	<nav
		class="flex items-center justify-between rounded-2xl bg-zinc-800 bg-opacity-80 py-4 lg:pe-8 pe-6 lg:ps-12 ps-8"
	>
		<div class="flex gap-8">
			<a href="/" class="items-center justify-center hidden lg:flex">
				<NeonText text="Luka" containerClasses="h-full justify-center items-center"></NeonText>
			</a>
			<NeonText text="Luka" containerClasses="h-full justify-center items-center lg:hidden"></NeonText>
			<div class="hidden items-center lg:flex">
				<a
					href="/about"
					class="px-4 font-cyber text-xl text-white transition-colors duration-500 hover:text-lightblue"
					>About</a
				>
				<a
					href="/projects"
					class="px-4 font-cyber text-xl text-white transition-colors duration-500 hover:text-lightblue"
					>Projects</a
				>
				<a
					href="/#experience"
					class="px-4 font-cyber text-xl text-white transition-colors duration-500 hover:text-lightblue"
					>Experience</a
				>
			</div>
		</div>
		<div class="hidden items-center justify-center gap-2 text-white lg:flex">
			{#each links as link}
				{@const Icon = link.icon}
				<a
					href={link.href}
					class="rounded-md bg-[#fff] px-2 py-2 text-gray-700 transition-transform duration-700 hover:scale-110 {link.classes}"
					target={link.target}
				>
					<Icon width="24" />
				</a>
			{/each}
		</div>
		<div class="flex h-full items-center justify-center lg:hidden">
			<button class="text-white" onclick={expand} aria-label="toggle menu">
				<MenuIcon />
			</button>

			<div
				class={`absolute left-0 top-0 h-screen w-full bg-zinc-900 px-12 py-8 text-white transition-transform duration-300 ease-in-out ${
					$isMenuExpanded ? 'translate-y-0' : 'pointer-events-none -translate-y-full'
				}`}
			>
				<div class="flex flex-col items-center justify-center gap-8">
					<div class="mb-12 flex w-full items-center justify-between gap-8">
						<a href="/" class="flex items-center justify-center" onclick={collapse}>
							<NeonText text="Luka" containerClasses="h-full justify-center items-center"
							></NeonText>
						</a>
						<button
							class="text-white"
							onclick={collapse}
							aria-label="toggle menu"
						>
							<MenuIcon />
						</button>
					</div>
					<a
						href="/about"
						class="w-full font-cyber text-xl text-white transition-colors duration-500 hover:text-lightblue"
						onclick={collapse}>About</a
					>
					<a
						href="/projects"
						class="w-full font-cyber text-xl text-white transition-colors duration-500 hover:text-lightblue"
						onclick={collapse}>Projects</a
					>
					<a
						href="/#experience"
						class="w-full font-cyber text-xl text-white transition-colors duration-500 hover:text-lightblue"
						onclick={collapse}>Experience</a
					>
				</div>
				<div class="my-8 flex items-center justify-center gap-8 text-white lg:hidden">
					{#each links as link}
						{@const Icon = link.icon}
						<a
							href={link.href}
							title={link.name}
							class="flex items-center justify-center rounded-md px-2 py-2 text-gray-700 transition-transform duration-700 hover:scale-[1.01] {link.classes}"
							target={link.target}
						>
							<Icon width="32"></Icon>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</nav>
</header>
