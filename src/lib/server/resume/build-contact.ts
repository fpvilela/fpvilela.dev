import type { ContactActionItem } from '$lib/types/resume';

import type { ContactRecord, ResumeSourceData } from './source-types';

function formatSocialValue(url: string): string {
	return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

function formatSocialLabel(name: string): string {
	return name === 'github' ? 'GitHub' : name === 'Linkedin' ? 'LinkedIn' : name;
}

function getSocialActions(contact: ContactRecord): ContactActionItem[] {
	return (
		contact.social?.map((item) => ({
			label: formatSocialLabel(item.name),
			value: formatSocialValue(item.url),
			href: item.url
		})) ?? []
	);
}

export function getContactActions({ contact }: ResumeSourceData): ContactActionItem[] {
	return [
		{
			label: 'Email',
			value: contact.email,
			href: `mailto:${contact.email}`
		},
		...getSocialActions(contact)
	];
}
