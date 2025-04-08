import { getNotices } from '$lib/server/models/notice.js';
import { getQnAs } from '$lib/server/models/qna.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const notices = await getNotices(3);
    const qnas = await getQnAs(3);
    return { notices, qnas };
}