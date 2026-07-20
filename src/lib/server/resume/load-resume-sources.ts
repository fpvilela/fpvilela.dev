import { readFileSync } from 'node:fs';

import { parse } from 'yaml';

import type {
	CompanyRecord,
	ContactRecord,
	CourseRecord,
	EducationRecord,
	LanguageRecord,
	ProjectRecord,
	ResumeExperienceRecord,
	ResumeSourceData,
	RoleRecord,
	SkillRecord
} from './source-types';

const RESUME_DATA_DIRECTORY = new URL('../../../../data/resume/', import.meta.url);

function readYamlFile<T>(fileName: string): T {
	return parse(readFileSync(new URL(fileName, RESUME_DATA_DIRECTORY), 'utf8')) as T;
}

export function loadResumeSources(): ResumeSourceData {
	return {
		experiences: readYamlFile<ResumeExperienceRecord[]>('experiences.yaml'),
		companies: readYamlFile<CompanyRecord[]>('companies.yaml'),
		roles: readYamlFile<RoleRecord[]>('roles.yaml'),
		projects: readYamlFile<ProjectRecord[]>('projects.yaml'),
		skills: readYamlFile<SkillRecord[]>('skills.yaml'),
		education: readYamlFile<EducationRecord[]>('education.yaml'),
		courses: readYamlFile<CourseRecord[]>('courses.yaml'),
		contact: readYamlFile<ContactRecord>('contact.yaml'),
		languages: readYamlFile<LanguageRecord[]>('languages.yaml')
	};
}
