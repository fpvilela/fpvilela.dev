import type { PageServerLoad } from './$types';

import { getExperiences } from '$lib/server/resume/build-experiences';
import { getProjects } from '$lib/server/resume/build-projects';
import { loadResumeSources } from '$lib/server/resume/load-resume-sources';

export const load: PageServerLoad = async () => {
	const resumeSources = loadResumeSources();

	return {
		experience: getExperiences(resumeSources),
		projects: getProjects(resumeSources)
	};
};
