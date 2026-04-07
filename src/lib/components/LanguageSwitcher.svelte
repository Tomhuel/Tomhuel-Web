<script lang="ts">
	import { language, type Language } from '$lib/stores/language';

	const currentLang = $derived($language);

	function setLanguage(lang: Language) {
		language.set(lang);
	}
</script>

<div class="relative group">
	<button
		class="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white rounded-lg"
		title="Language"
	>
		<span class="inline">{currentLang.toUpperCase()}</span>
		<svg 
			class="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" 
			fill="none" 
			stroke="currentColor" 
			viewBox="0 0 24 24"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
		</svg>
	</button>
	
	<!-- Dropdown menu for language selection -->
	<div class="absolute top-full right-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
		<div class="bg-zinc-800 rounded-lg shadow-lg border border-zinc-700 py-2 min-w-[120px]">
			<button
				onclick={() => setLanguage('en')}
				class="w-full px-4 py-2 text-left text-sm text-white hover:bg-zinc-700 transition-colors duration-200 flex items-center gap-2 {currentLang === 'en' ? 'bg-zinc-700' : ''}"
			>
				<span>English</span>
			</button>
			<button
				onclick={() => setLanguage('es')}
				class="w-full px-4 py-2 text-left text-sm text-white hover:bg-zinc-700 transition-colors duration-200 flex items-center gap-2 {currentLang === 'es' ? 'bg-zinc-700' : ''}"
			>
				<span>Español</span>
			</button>
		</div>
	</div>
</div>
