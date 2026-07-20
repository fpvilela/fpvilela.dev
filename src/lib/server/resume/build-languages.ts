import type { LanguageItem } from '$lib/types/resume';

import type { ResumeSourceData } from './source-types';

export function getLanguages({ languages }: ResumeSourceData): LanguageItem[] {
	return languages.map((item) => ({
		label: item.lang,
		value: item.proficiency
	}));
}
