<script lang="ts">
	import Experience from '$lib/content/Experience.svelte';
	import Presentation from '$lib/content/Presentation.svelte';
	import Projects from '$lib/content/Projects.svelte';
	import { language } from '$lib/stores/language';
	import { getTranslation } from '$lib/i18n/translations';

	const currentLang = $derived($language);
	
	function t(key: string) {
		return getTranslation(currentLang, key);
	}

	const pageTitle = $derived(t('home.title'));
	const pageDescription = $derived(t('home.description'));
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
</svelte:head>

<Presentation />
<Experience />
<Projects />
