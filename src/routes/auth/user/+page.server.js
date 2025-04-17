import { requireUser } from '$lib/server/auth.js';
import { generateToken } from '$lib/server/jwt';
import { findUserById, updateNickname } from '$lib/server/models/user.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
    requireUser(locals);
    const user = await findUserById(locals.user.id);
    return { user };
}

/** @satisfies {import('./$types').Actions} */
export const actions = {
    default: async ({ locals, request, cookies }) => {
        const data = await request.formData();
        const nickname = data.get('nickname');

        const user = await updateNickname(locals?.user?.id, nickname);
        const token = generateToken(user);
        cookies.set('auth_token', token, {
            path: '/',
            maxAge: 60 * 60 * 24,
        });

        return { success: true };
    }
};