import { getScores } from '$lib/server/models/score.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const scores = await getScores("runner");
    return { scores };
}