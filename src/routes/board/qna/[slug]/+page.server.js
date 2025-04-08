import { findQnAById } from '$lib/server/models/qna.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const qna = await findQnAById(params.slug);
    return { qna };
}