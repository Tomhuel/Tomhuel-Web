<script lang="ts">
	import Section from '$lib/components/layout/Section.svelte';
	import { onDestroy, onMount } from 'svelte';
	import getCurrentDatetime from '../../utils/getCurrentDatetime';
	import NeonText from '$lib/components/ui/Neon/NeonText.svelte';
	import StatusBubble from '$lib/components/ui/StatusBubble/StatusBubble.svelte';

	const workAvaiable = true;
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
				<div class="relative -z-10 flex w-full flex-col gap-2 font-cyber">
					<NeonText text="LukaLaKuka" textClasses="text-4xl"></NeonText>
					<div class="flex gap-4 pb-4 pt-2">
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
				<h4 class="font-mono text-xl">
					Soy un <span class="text-[#ffb3ff]">desarrollador web</span> con un año de experiencia,
					apasionado por crear, compartir y aprender de los
					<span class="text-[#ffb3ff]">desafíos</span>
					que se me presentan. Aunque mi interés se enfoca en el
					<span class="text-[#ffb3ff]">desarrollo backend</span>, me considero una persona flexible
					y capaz de abordar tareas en cualquier área del desarrollo.
				</h4>
				<h4 class="font-mono text-xl">
					Busco formar parte de un equipo donde pueda aportar mi
					<span class="text-[#ffb3ff]"> motivación</span> y <span class="text-[#ffb3ff]">ganas de aprender</span>, rodeándome de
					profesionales que me ayuden a <span class="text-[#ffb3ff]">crecer</span> tanto personal como
					profesionalmente. Mi objetivo es seguir desarrollándome y contribuir al éxito de proyectos
					que generen un impacto positivo.
				</h4>
				<span class="text-lightblue"></span>
			</div>
		</div>
	</div>
</Section>
