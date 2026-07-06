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
};

export type ResumeSourceData = {
	experiences: ResumeExperienceRecord[];
	companies: CompanyRecord[];
	roles: RoleRecord[];
	projects: ProjectRecord[];
};
