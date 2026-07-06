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
