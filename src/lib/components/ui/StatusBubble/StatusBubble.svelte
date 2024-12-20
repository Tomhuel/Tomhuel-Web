<script lang="ts">
	import { CircleIcon } from '$lib/icons';

	const {
		bgColor,
		text,
		textColor,
		circleColor = '#fff'
	}: { bgColor: string; text: string; textColor: string; circleColor?: string } = $props();
</script>

<div
	class="{bgColor} flex w-fit items-center justify-center gap-2 rounded-full bg-opacity-45 p-2 px-4"
>
	<CircleIcon fill={circleColor} width="14"></CircleIcon>
	<span class="{textColor} text-sm">{text}</span>
</div>
