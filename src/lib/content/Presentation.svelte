<script lang="ts">
	import Section from '$lib/components/layout/Section.svelte';
	import { onDestroy, onMount } from 'svelte';
	import getCurrentDatetime from '../../utils/getCurrentDatetime';
	import NeonText from '$lib/components/ui/Neon/NeonText.svelte';
	import StatusBubble from '$lib/components/ui/StatusBubble/StatusBubble.svelte';

	const workAvaiable = false;
	let currentTime = getCurrentDatetime();
	let interval: number;

	onMount(() => {
		interval = setInterval(() => {
			currentTime = getCurrentDatetime();
		});
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<Section>
	<div class="flex flex-col">
		<div class="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2fr]">
			<div class="col-span-1 mx-8 flex justify-center md:mx-0">
				<div class="flex aspect-square w-full max-w-xs items-center rounded-full">
					<img
						src="https://avatars.githubusercontent.com/u/90792144"
						class="aspect-square rounded-full object-cover"
						alt=""
					/>
				</div>
			</div>
			<div class="flex flex-col items-start justify-start gap-4 text-left text-white">
				<div class="flex w-full flex-col gap-2 font-cyber">
					<NeonText text="Tomhuel" textClasses="text-4xl" containerClasses="-z-10"></NeonText>
					<div class="flex gap-4 pb-4 pt-2 flex-wrap">
						<StatusBubble
							text={currentTime}
							bgColor="bg-pink-400"
							textColor="text-pink-100"
							circleColor="#FCE7F3"
						/>
						{#if workAvaiable}
							<StatusBubble
								text="Work Status: Avaiable"
								bgColor="bg-green-500"
								textColor="text-green-100"
								circleColor="#0f0"
							/>
						{:else}
							<StatusBubble
								text="Work Status: Unavaiable"
								bgColor="bg-red-500"
								textColor="text-red-100"
								circleColor="#f00"
							/>
						{/if}
					</div>
				</div>
				<h4 class="text-xl font-normal">
					I'm a <span class="text-light-pink">web developer</span> with 1 year of experience,
					passionate about creating, share and learn from the
					<span class="text-light-pink">challenges</span>
					that come my way. Although my interest is focused on
					<span class="text-light-pink">backend development</span>, I consider myself a flexible
					person and capable of tackling tasks in any area of development.
				</h4>
				<a
					href="/about"
					class="focus:text-light inline-flex items-center rounded-lg border border-gray-600 px-4 py-2 text-sm font-medium text-gray-400 hover:text-light-pink hover:bg-zinc-900 focus:z-10 focus:outline-none focus:ring-1 focus:ring-lightblue transition-[color] duration-700"
					>Discover my journey<svg
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
				<span class="text-lightblue"></span>
			</div>
		</div>
	</div>
</Section>
