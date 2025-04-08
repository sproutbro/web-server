import { getQnAs } from '$lib/server/models/qna.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const qnas = await getQnAs();
    return { qnas };
}