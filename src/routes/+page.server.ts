import type { PageServerLoad } from './$types';

import { getEducation } from '$lib/server/resume/build-education';
import { getExperiences } from '$lib/server/resume/build-experiences';
import { getProjects } from '$lib/server/resume/build-projects';
import { loadResumeSources } from '$lib/server/resume/load-resume-sources';

export const load: PageServerLoad = async () => {
	const resumeSources = loadResumeSources();

	return {
		education: getEducation(resumeSources),
		experience: getExperiences(resumeSources),
		projects: getProjects(resumeSources)
	};
};
