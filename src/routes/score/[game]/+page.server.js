import { getScoreByGame } from '$lib/server/models/score.js';
import { findQuizScoreAll } from '$lib/server/models/quiz.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

    if (params.game === "quiz") {
        const scores = await findQuizScoreAll();
        return { scores };
    }

    if (params.game === "runner") {
        const scores = await getScoreByGame(params.game);
        return { scores };
    }
}