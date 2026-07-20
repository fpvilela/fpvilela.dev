import type { CourseItem, LinkItem } from '$lib/types/resume';

import type { CourseRecord, ResumeSourceData } from './source-types';

function getCourseLinks(course: CourseRecord): LinkItem[] {
	return course.links?.map((link) => ({
		label: link.label,
		href: link.url,
		icon: link.icon
	})) ?? [];
}

export function getCourses({ courses }: ResumeSourceData): CourseItem[] {
	return courses.map((course) => ({
		id: course.id,
		title: course.title,
		provider: course.provider,
		description: course.description,
		note: course.note,
		links: getCourseLinks(course)
	}));
}
