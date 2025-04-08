import { findNoticeById } from '$lib/server/models/notice.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const notice = await findNoticeById(params.slug);
    return { notice };
}