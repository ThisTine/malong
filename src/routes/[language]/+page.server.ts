import { malongAPI } from '../../utils/server';
import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async ({ params }) => {
	let data;
	try {
		const dataD = await malongAPI.get<Sponsor[]>('/sponsors.json');
		data = dataD.data;
	} catch (err) {
		console.log(err);
	}

	return {
		lang: params.language,
		sponsor: data
	};
};
