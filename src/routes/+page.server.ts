import type { PageServerLoad } from './$types';

import { getExperience } from '$lib/server/resume';

export const load: PageServerLoad = async () => {
	return {
		experience: getExperience()
	};
};
