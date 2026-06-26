import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { parse } from 'yaml';

export type LinkItem = { label: string; href: string };

export type ExperienceItem = {
	title: string;
	company: string;
	companyHref?: string;
	dateOfEmployment: string;
	description: string;
	roles: string[];
	projects: LinkItem[];
};

type ResumeExperienceRecord = {
	title: string;
	company: string;
	'date-of-employment': string;
	summary: string;
	roles: string[];
	projects: string[];
};

type CompanyRecord = {
	id: string;
	company: string;
	links?: Array<{
		name?: string;
		icon?: string;
		url: string;
	}>;
};

type RoleRecord = {
	id: string;
	title: string;
};

type ProjectRecord = {
	id: string;
	title: string;
	'short-title'?: string;
};

function readYamlFile<T>(relativePath: string): T {
	const absolutePath = resolve(relativePath);
	return parse(readFileSync(absolutePath, 'utf8')) as T;
}

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

export function getExperience(): ExperienceItem[] {
	const experiences = readYamlFile<ResumeExperienceRecord[]>('data/resume/experiences.yaml');
	const companies = toMap(readYamlFile<CompanyRecord[]>('data/resume/companies.yaml'));
	const roles = toMap(readYamlFile<RoleRecord[]>('data/resume/roles.yaml'));
	const projects = toMap(readYamlFile<ProjectRecord[]>('data/resume/projects.yaml'));

	return experiences.map((item) => {
		const company = getRequired(companies, item.company, 'company');

		return {
			title: item.title,
			company: company.company,
			companyHref: getCompanyHref(company),
			dateOfEmployment: item['date-of-employment'],
			description: item.summary,
			roles: item.roles.map((roleId) => getRequired(roles, roleId, 'role').title),
			projects: item.projects.map((projectId) => {
				const project = getRequired(projects, projectId, 'project');

				return {
					label: project['short-title'] ?? project.title,
					href: `#${project.id}`
				};
			})
		};
	});
}
