export type LinkItem = { label: string; href: string; icon?: string };

export type ExperienceItem = {
	title: string;
	company: string;
	companyHref?: string;
	dateOfEmployment: string;
	description: string;
	roles: string[];
	projects: LinkItem[];
};

export type ProjectItem = {
	id: string;
	title: string;
	year: number;
	summary: string;
	bullets: string[];
	skills: string[];
	links?: LinkItem[];
	hasMoreContent?: boolean;
};

export type EducationItem = {
	id: string;
	graduated: string;
	institution: string;
	institutionHref?: string;
	degree: string;
	note: string;
	location: string;
};

export type CourseItem = {
	id: string;
	title: string;
	provider: string;
	description: string;
	note: string;
	links: LinkItem[];
};

export type ContactActionItem = {
	label: string;
	value: string;
	href: string;
};

export type LanguageItem = {
	label: string;
	value: string;
};
