import { readFileSync } from 'node:fs';

import { error } from '@sveltejs/kit';
import { parse } from 'yaml';

import type { PageServerLoad } from './$types';

import type {
	CompanyRecord,
	ContactRecord,
	CourseRecord,
	EducationRecord,
	LanguageRecord,
	ProjectRecord,
	ResumeExperienceRecord,
	RoleRecord,
	SkillRecord
} from '$lib/server/resume-types';

const RESUME_DATA_DIRECTORY = new URL('../../data/resume/', import.meta.url);

function readResumeYamlFile<T>(fileName: string): T {
	try {
		const filePath = new URL(fileName, RESUME_DATA_DIRECTORY);
		const fileText = readFileSync(filePath, 'utf8');

		return parse(fileText) as T;
	} catch (cause) {
		console.error(`Failed to load ${fileName}`, cause);
		error(500, `Failed to load ${fileName}`);
	}
}

function createRecordMap<T extends { id: string }>(items: T[]): Map<string, T> {
	return new Map(items.map((item) => [item.id, item]));
}

function getRequiredRecord<T>(items: Map<string, T>, id: string, kind: string): T {
	const item = items.get(id);

	if (!item) {
		error(500, `Missing ${kind} reference: ${id}`);
	}

	return item;
}

export const load: PageServerLoad = async () => {
	const experiences = readResumeYamlFile<ResumeExperienceRecord[]>('experiences.yaml');
	const companies = readResumeYamlFile<CompanyRecord[]>('companies.yaml');
	const roles = readResumeYamlFile<RoleRecord[]>('roles.yaml');
	const projectsRaw = readResumeYamlFile<ProjectRecord[]>('projects.yaml');
	const skills = readResumeYamlFile<SkillRecord[]>('skills.yaml');
	const educationRaw = readResumeYamlFile<EducationRecord[]>('education.yaml');
	const coursesRaw = readResumeYamlFile<CourseRecord[]>('courses.yaml');
	const contact = readResumeYamlFile<ContactRecord>('contact.yaml');
	const languagesRaw = readResumeYamlFile<LanguageRecord[]>('languages.yaml');

	const companiesById = createRecordMap(companies);
	const rolesById = createRecordMap(roles);
	const projectsById = createRecordMap(projectsRaw);
	const skillsById = createRecordMap(skills);

	const contactActions = [
		{
			label: 'Email',
			value: contact.email,
			href: `mailto:${contact.email}`
		},
		...(contact.social?.map((item) => ({
			label: item.name === 'github' ? 'GitHub' : item.name === 'Linkedin' ? 'LinkedIn' : item.name,
			value: item.url.replace(/^https?:\/\//, '').replace(/\/$/, ''),
			href: item.url
		})) ?? [])
	];

	const education = educationRaw.map((entry) => ({
		id: entry.id,
		graduated: entry.graduated,
		institution: entry.institution,
		institutionHref: entry.institutionHref,
		degree: `${entry.degree} in ${entry.title}`,
		note: entry.note,
		location: entry.location
	}));

	const courses = coursesRaw.map((course) => ({
		id: course.id,
		title: course.title,
		provider: course.provider,
		description: course.description,
		note: course.note,
		links:
			course.links?.map((link) => ({
				label: link.label,
				href: link.url,
				icon: link.icon
			})) ?? []
	}));

	const experience = experiences.map((entry) => {
		const company = getRequiredRecord(companiesById, entry.company, 'company');

		const roleTitles = entry.roles.map((roleId) => {
			const role = getRequiredRecord(rolesById, roleId, 'role');

			return role.title;
		});

		const projectLinks = entry.projects.map((projectId) => {
			const project = getRequiredRecord(projectsById, projectId, 'project');

			return {
				label: project['short-title'] ?? project.title,
				href: `#${project.id}`
			};
		});

		return {
			title: entry.title,
			company: company.company,
			companyHref:
				company.links?.find((link) => link.name === 'Website')?.url ?? company.links?.[0]?.url,
			dateOfEmployment: entry['date-of-employment'],
			description: entry.summary,
			roles: roleTitles,
			projects: projectLinks
		};
	});

	const languages = languagesRaw.map((item) => ({
		label: item.lang,
		value: item.proficiency
	}));

	const projects = projectsRaw
		.filter((project) => project.featured)
		.sort(
			(a, b) =>
				(a['featured-order'] ?? Number.MAX_SAFE_INTEGER) - (b['featured-order'] ?? Number.MAX_SAFE_INTEGER)
		)
		.map((project) => {
			const selectedBullets = project['featured-bullets'] ?? project.bullets;
			const selectedSkillIds = project['featured-skills'] ?? project.skills;
			const selectedSkills = selectedSkillIds.map((skillId) => {
				const skill = getRequiredRecord(skillsById, skillId, 'skill');

				return skill.label;
			});

			return {
				id: project.id,
				title: project['short-title'] ?? project.title,
				year: project.year,
				summary: project.summary,
				bullets: selectedBullets,
				skills: selectedSkills,
				links: project.links?.map((link) => ({
					label: link.label,
					href: link.url,
					icon: link.icon
				})),
				hasMoreContent: selectedBullets.length < project.bullets.length
			};
		});

	return {
		contactActions,
		education,
		courses,
		experience,
		languages,
		projects
	};
};
