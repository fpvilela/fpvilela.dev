import type { ExperienceItem } from '$lib/types/resume';

import type {
	CompanyRecord,
	ProjectRecord,
	ResumeSourceData,
	RoleRecord
} from './source-types';

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

function getCompanyHref(company: CompanyRecord): string | undefined {
	return company.links?.find((link) => link.name === 'Website')?.url ?? company.links?.[0]?.url;
}

function getRoleTitles(roleIds: string[], roles: Map<string, RoleRecord>): string[] {
	return roleIds.map((roleId) => getRequired(roles, roleId, 'role').title);
}

function getProjectLinks(projectIds: string[], projects: Map<string, ProjectRecord>) {
	return projectIds.map((projectId) => {
		const project = getRequired(projects, projectId, 'project');

		return {
			label: project['short-title'] ?? project.title,
			href: `#${project.id}`
		};
	});
}

export function getExperiences({
	experiences,
	companies,
	roles,
	projects
}: ResumeSourceData): ExperienceItem[] {
	const companiesById = toMap(companies);
	const rolesById = toMap(roles);
	const projectsById = toMap(projects);

	return experiences.map((item) => {
		const company = getRequired(companiesById, item.company, 'company');

		return {
			title: item.title,
			company: company.company,
			companyHref: getCompanyHref(company),
			dateOfEmployment: item['date-of-employment'],
			description: item.summary,
			roles: getRoleTitles(item.roles, rolesById),
			projects: getProjectLinks(item.projects, projectsById)
		};
	});
}
