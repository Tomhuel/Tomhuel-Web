<script lang="ts">
	const { text, containerClasses = '', textClasses = '' } = $props();

	// TODO: Select text-color && Decide if neon-container hover change text-color

	const letters = [...text].map((char, index) => ({
		char,
		delay: index * 0.2
	}));
</script>

<div class="neon-container flex {containerClasses}">
	{#each letters as { char, delay }}
		{#if char === ' '}
			<span class="neon-space"></span>
		{:else}
			<span
				class="neon-font font-cyber text-5xl opacity-100 {textClasses}"
				style="animation-delay: {delay}s">{char}</span
			>
		{/if}
	{/each}
</div>

<style>
	.neon-font {
		color: #fff;
		text-shadow:
			#00ffff -1px -1px 0px,
			#ff00ff 2px 2px 2px;
		transition: all 2s ease;
		opacity: 1;
		animation: 6s bounce ease-in-out infinite;
	}

	.neon-space {
		width: 10px;
	}

	@keyframes bounce {
		0%,
		20% {
			transform: translateY(0px);
		}
		10% {
			transform: translateY(-5px);
		}
	}
</style>
