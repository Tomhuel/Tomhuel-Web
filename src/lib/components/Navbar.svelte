<script lang="ts">
	import NeonText from './ui/Neon/NeonText.svelte';
	import MenuIcon from '$lib/icons/MenuIcon.svelte';
	import MailIcon from '$lib/icons/MailIcon.svelte';
	import LinkedinIcon from '$lib/icons/LinkedinIcon.svelte';
	import GithubIcon from '$lib/icons/GithubIcon.svelte';

	let expanded = $state(false);
</script>

<header class="sticky left-0 top-0 w-full px-16 py-8">
	<nav
		class="flex items-center justify-between rounded-2xl bg-zinc-800 bg-opacity-80 py-4 pe-8 ps-12"
	>
		<div class="flex gap-8">
			<a href="/" class="flex items-center justify-center">
				<NeonText text="Luka" containerClasses="h-full justify-center items-center"></NeonText>
			</a>
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
			<a
				href="mailto:tomasnahuelantela@gmail.com"
				class="rounded-md bg-[#fff] px-2 py-2 text-gray-700 transition-transform duration-700 hover:scale-110"
			>
				<MailIcon width="24"></MailIcon>
			</a>
			<a
				href="https://github.com/tomhuel"
				target="_blank"
				class="rounded-md bg-black px-2 py-2 transition-transform duration-700 hover:scale-110"
			>
				<GithubIcon fill="#fff" />
			</a>
			<a
				href="https://www.linkedin.com/in/tomhuel/"
				target="_blank"
				class="bg-linkedin-blue rounded-md px-2 py-2 transition-transform duration-700 hover:scale-110"
			>
				<LinkedinIcon width="24"></LinkedinIcon>
			</a>
		</div>
		<div class="flex h-full items-center justify-center lg:hidden">
			<button class="text-white" onclick={() => (expanded = !expanded)} aria-label="toggle menu">
				<MenuIcon />
			</button>

			<div
				class={`absolute left-0 top-0 h-screen w-full bg-zinc-900 px-12 py-8 text-white transition-transform duration-300 ease-in-out ${
					expanded ? 'translate-y-0' : 'pointer-events-none -translate-y-full opacity-0'
				}`}
			>
				<div class="flex flex-col items-center justify-center gap-8">
					<div class="mb-12 flex w-full items-center justify-between gap-8">
						<a href="/" class="flex items-center justify-center" onclick={() => (expanded = false)}>
							<NeonText text="Luka" containerClasses="h-full justify-center items-center"
							></NeonText>
						</a>
						<button
							class="text-white"
							onclick={() => (expanded = !expanded)}
							aria-label="toggle menu"
						>
							<MenuIcon />
						</button>
					</div>
					<a
						href="/about"
						class="w-full font-cyber text-xl text-white transition-colors duration-500 hover:text-lightblue"
						onclick={() => (expanded = false)}>About</a
					>
					<a
						href="/projects"
						class="w-full font-cyber text-xl text-white transition-colors duration-500 hover:text-lightblue"
						onclick={() => (expanded = false)}>Projects</a
					>
					<a
						href="/#experience"
						class="w-full font-cyber text-xl text-white transition-colors duration-500 hover:text-lightblue"
						onclick={() => (expanded = false)}>Experience</a
					>
				</div>
				<div class="lg:hidden items-center justify-center gap-2 text-white flex my-8 flex-col">
					<a
						href="mailto:tomasnahuelantela@gmail.com"
						class="rounded-md bg-[#fff] px-2 py-2 text-gray-700 transition-transform duration-700 hover:scale-110 w-1/4 flex justify-center items-center"
					>
						<MailIcon width="24"></MailIcon>
					</a>
					<a
						href="https://github.com/tomhuel"
						target="_blank"
						class="rounded-md bg-black px-2 py-2 transition-transform duration-700 hover:scale-110 w-1/4 flex justify-center items-center"
					>
						<GithubIcon fill="#fff" />
					</a>
					<a
						href="https://www.linkedin.com/in/tomhuel/"
						target="_blank"
						class="bg-linkedin-blue rounded-md px-2 py-2 transition-transform duration-700 hover:scale-110 w-1/4 flex justify-center items-center"
					>
						<LinkedinIcon width="24"></LinkedinIcon>
					</a>
				</div>
			</div>
		</div>
	</nav>
</header>
