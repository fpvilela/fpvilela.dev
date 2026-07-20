export type ResumeExperienceRecord = {
	title: string;
	company: string;
	'date-of-employment': string;
	summary: string;
	roles: string[];
	projects: string[];
};

export type CompanyRecord = {
	id: string;
	company: string;
	links?: Array<{
		name?: string;
		icon?: string;
		url: string;
	}>;
};

export type RoleRecord = {
	id: string;
	title: string;
};

export type ProjectRecord = {
	id: string;
	title: string;
	'short-title'?: string;
	year: number;
	featured?: boolean;
	'featured-order'?: number;
	'featured-skills'?: string[];
	'featured-bullets'?: string[];
	summary: string;
	bullets: string[];
	links?: Array<{
		label: string;
		url: string;
		icon?: string;
	}>;
	skills: string[];
};

export type SkillRecord = {
	id: string;
	label: string;
};

export type EducationRecord = {
	id: string;
	degree: string;
	title: string;
	institution: string;
	institutionHref?: string;
	location: string;
	note: string;
	graduated: string;
};

export type CourseRecord = {
	id: string;
	title: string;
	provider: string;
	description: string;
	note: string;
	links?: Array<{
		label: string;
		icon?: string;
		url: string;
	}>;
};

export type ResumeSourceData = {
	experiences: ResumeExperienceRecord[];
	companies: CompanyRecord[];
	roles: RoleRecord[];
	projects: ProjectRecord[];
	skills: SkillRecord[];
	education: EducationRecord[];
	courses: CourseRecord[];
};
