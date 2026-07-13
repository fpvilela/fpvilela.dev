import type { LinkItem, ProjectItem } from '$lib/types/resume';

import type { ProjectRecord, ResumeSourceData, SkillRecord } from './source-types';

function toMap<T extends { id: string }>(items: T[]): Map<string, T> {
	return new Map(items.map((item) => [item.id, item]));
}

function getRequired<T>(map: Map<string, T>, id: string, kind: string): T {
	const item = map.get(id);

	if (!item) {
		throw new Error(`Missing ${kind} reference: ${id}`);
	}

	return item;
}

function getSkillLabels(skillIds: string[], skills: Map<string, SkillRecord>): string[] {
	return skillIds.map((skillId) => getRequired(skills, skillId, 'skill').label);
}

function getProjectLinks(project: ProjectRecord): LinkItem[] | undefined {
	return project.links?.map((link) => ({
		label: link.label,
		href: link.url,
		icon: link.icon
	}));
}

function buildProjectItem(
	project: ProjectRecord,
	skillsById: Map<string, SkillRecord>,
	options: { featured: boolean }
): ProjectItem {
	const bullets = options.featured ? (project['featured-bullets'] ?? project.bullets) : project.bullets;
	const skillIds = options.featured ? (project['featured-skills'] ?? project.skills) : project.skills;
	const hasHiddenBullets = bullets.length < project.bullets.length;

	return {
		id: project.id,
		title: project['short-title'] ?? project.title,
		year: project.year,
		summary: project.summary,
		bullets,
		skills: getSkillLabels(skillIds, skillsById),
		links: getProjectLinks(project),
		hasMoreContent: options.featured && hasHiddenBullets
	};
}

export function getProjects({ projects, skills }: ResumeSourceData): ProjectItem[] {
	const skillsById = toMap(skills);

	return projects
		.filter((project) => project.featured)
		.sort(
			(a, b) =>
				(a['featured-order'] ?? Number.MAX_SAFE_INTEGER) - (b['featured-order'] ?? Number.MAX_SAFE_INTEGER)
		)
		.map((project) => buildProjectItem(project, skillsById, { featured: true }));
}
