import { writable } from 'svelte/store';

export type Language = 'en' | 'es';

export const supportedLanguages: Language[] = ['en', 'es'];

function detectLanguage(): Language {
	// Check localStorage first
	if (typeof window !== 'undefined') {
		const stored = localStorage.getItem('language') as Language;
		if (stored && supportedLanguages.includes(stored)) {
			return stored;
		}
	}

	// Detect from browser locale
	const browserLocale = typeof navigator !== 'undefined' 
		? navigator.language || navigator.languages?.[0] 
		: 'en';
	
	// Check for Spanish-speaking regions
	const spanishRegions = [
		'es', 'es-AR', 'es-BO', 'es-CL', 'es-CO', 'es-CR', 'es-DO', 
		'es-EC', 'es-SV', 'es-GT', 'es-HN', 'es-MX', 'es-NI', 'es-PA', 
		'es-PY', 'es-PE', 'es-PR', 'es-UY', 'es-VE'
	];
	
	if (spanishRegions.some(region => browserLocale.toLowerCase().startsWith(region))) {
		return 'es';
	}
	
	return 'en';
}

function createLanguageStore() {
	const { subscribe, set, update } = writable<Language>(detectLanguage());

	return {
		subscribe,
		set: (lang: Language) => {
			if (supportedLanguages.includes(lang)) {
				set(lang);
				if (typeof window !== 'undefined') {
					localStorage.setItem('language', lang);
				}
			}
		},
		toggle: () => {
			update(current => current === 'en' ? 'es' : 'en');
		}
	};
}

export const language = createLanguageStore();
