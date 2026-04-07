import { language } from '$lib/stores/language';
import { getTranslation } from './translations';

export function translate(key: string) {
	let currentLang: 'en' | 'es' = 'en';
	language.subscribe(lang => currentLang = lang)();
	
	return getTranslation(currentLang, key);
}

export { language } from '$lib/stores/language';
