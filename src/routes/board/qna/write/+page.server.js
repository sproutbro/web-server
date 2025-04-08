import { requireUser } from '$lib/server/auth.js';
import { saveQnA } from "$lib/server/models/qna.js";
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
    requireUser(locals);
}

export const actions = {
    default: async ({ request, locals }) => {
        const formData = await request.formData();
        const title = formData.get('title');
        const content = formData.get('content');

        if (!title || !content) {
            return {
                status: 400,
                errors: { message: '제목과 내용을 입력해주세요.' }
            };
        }

        requireUser(locals);
        const id = await saveQnA({ user_id: locals.user.id, title, content });

        redirect(302, `/board/qna/${id}`);
    }
};