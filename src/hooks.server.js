import { verifyToken } from '$lib/server/jwt.js';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    const token = event.cookies.get('auth_token');
    const user = token ? verifyToken(token) : null;
    if (user?.id && user?.nickname) {
        event.locals.user = { id: user.id, nickname: user.nickname };
    }

    return resolve(event);
}
