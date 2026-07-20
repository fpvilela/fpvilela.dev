import type { PageServerLoad } from './$types';

import { getContactActions } from '$lib/server/resume/build-contact';
import { getCourses } from '$lib/server/resume/build-courses';
import { getEducation } from '$lib/server/resume/build-education';
import { getExperiences } from '$lib/server/resume/build-experiences';
import { getLanguages } from '$lib/server/resume/build-languages';
import { getProjects } from '$lib/server/resume/build-projects';
import { loadResumeSources } from '$lib/server/resume/load-resume-sources';

export const load: PageServerLoad = async () => {
	const resumeSources = loadResumeSources();

	return {
		contactActions: getContactActions(resumeSources),
		education: getEducation(resumeSources),
		courses: getCourses(resumeSources),
		experience: getExperiences(resumeSources),
		languages: getLanguages(resumeSources),
		projects: getProjects(resumeSources)
	};
};
