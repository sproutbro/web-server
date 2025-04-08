import { getScoreByGame } from '$lib/server/models/score.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const scores = await getScoreByGame(params.game);
    return { scores };
}