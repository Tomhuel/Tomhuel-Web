<script lang="ts">
	import Section from '$lib/components/layout/Section.svelte';
	import NeonText from '$lib/components/ui/Neon/NeonText.svelte';
	import { language } from '$lib/stores/language';
	import { getTranslation } from '$lib/i18n/translations';

	const currentLang = $derived($language);
	
	function t(key: string) {
		return getTranslation(currentLang, key);
	}

	const pageTitle = $derived(t('about.title'));
	const journeyTitle = $derived(t('about.journey.title'));
	const journeyIntro = $derived(t('about.journey.intro'));
	const meTitle = $derived(t('about.me.title'));
	const meParagraph1 = $derived(t('about.me.paragraph1'));
	const meParagraph2 = $derived(t('about.me.paragraph2'));
	const rubikTitle = $derived(t('about.rubik.title'));
	const rubikParagraph1 = $derived(t('about.rubik.paragraph1'));
	const rubikParagraph2 = $derived(t('about.rubik.paragraph2'));
	const rubikParagraph3 = $derived(t('about.rubik.paragraph3'));
	const rubikParagraph4 = $derived(t('about.rubik.paragraph4'));
	const rubikParagraph5 = $derived(t('about.rubik.paragraph5'));
	const rubikParagraph6 = $derived(t('about.rubik.paragraph6'));
	const rubikParagraph7 = $derived(t('about.rubik.paragraph7'));
	const computingTitle = $derived(t('about.computing.title'));
	const computingParagraph1 = $derived(t('about.computing.paragraph1'));
	const computingParagraph2 = $derived(t('about.computing.paragraph2'));
	const computingParagraph3 = $derived(t('about.computing.paragraph3'));
	const computingParagraph4 = $derived(t('about.computing.paragraph4'));
</script>

<svelte:head>
	<title>Tomhuel - {pageTitle}</title>
</svelte:head>

<Section classname="pt-6 lg:px-48">
	<div class="text-md font-normal text-white">
		<NeonText text={journeyTitle} textClasses="text-2xl"></NeonText>
		<br />
		<p class="mb-16">
			{@html journeyIntro}
		</p>
		<div class="mb-12">
			<NeonText text={meTitle} textClasses="text-2xl"></NeonText>
			<p>
				{@html meParagraph1}
			</p>

			<p>
				{@html meParagraph2}
			</p>
		</div>

		<div class="mb-12">
			<NeonText text={rubikTitle} textClasses="text-2xl"></NeonText>

			<p>
				{@html rubikParagraph1}
			</p>
			<p>
				{@html rubikParagraph2}
			</p>

			<p>
				{@html rubikParagraph3}
			</p>

			<p>
				{@html rubikParagraph4}
			</p>

			<p>
				{@html rubikParagraph5}
			</p>

			<p>
				{@html rubikParagraph6}
			</p>

			<p>
				{@html rubikParagraph7}
			</p>
		</div>

		<div class="mb-12">
			<NeonText text={computingTitle} textClasses="text-2xl"></NeonText>

			<p>
				{@html computingParagraph1}
			</p>

			<p>
				{@html computingParagraph2}
			</p>

			<p>
				{@html computingParagraph3}
			</p>

			<p>
				{@html computingParagraph4}
			</p>
		</div>
	</div>
</Section>

<style>
	p {
		margin-top: 1rem;
	}
</style>
