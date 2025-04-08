import { getNotices } from '$lib/server/models/notice.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const notices = await getNotices();
    return { notices };
}