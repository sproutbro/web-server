import { getScores } from '$lib/server/models/score.js';
import { findQuizScore } from "$lib/server/models/quiz.js";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const scores = await getScores("runner");
    const quizScore = await findQuizScore();
    return { scores, quizScore };
}