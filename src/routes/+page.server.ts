import type { PageServerLoad } from './$types';

import { getExperiences } from '$lib/server/resume/build-experiences';
import { loadResumeSources } from '$lib/server/resume/load-resume-sources';

export const load: PageServerLoad = async () => {
	const resumeSources = loadResumeSources();

	return {
		experience: getExperiences(resumeSources)
	};
};
