import type { EducationItem } from '$lib/types/resume';

import type { ResumeSourceData } from './source-types';

function formatDegree(degree: string, title: string): string {
	return `${degree} in ${title}`;
}

export function getEducation({ education }: ResumeSourceData): EducationItem[] {
	return education.map((entry) => ({
		id: entry.id,
		year: entry.year,
		institution: entry.institution,
		institutionHref: entry.institutionHref,
		degree: formatDegree(entry.degree, entry.title),
		note: entry.note,
		location: entry.location
	}));
}
