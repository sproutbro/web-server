import { redirect, error } from "@sveltejs/kit";
import { OAUTH_CALLBACK_HANDLER } from '$lib/oauth/callbackHandlers';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url, params, cookies }) {
    const provider = params.provider;
    const code = url.searchParams.get("code");
    const returnedState = url.searchParams.get("state");
    const storedState = cookies.get('state');

    if (!code || !returnedState || returnedState !== storedState) {
        throw error(400, 'Invalid OAuth state or missing code');
    }

    const handler = OAUTH_CALLBACK_HANDLER[provider];
    if (!handler) throw error(400, `Unsupported provider: ${provider}`);

    const user = await handler({ code });
    cookies.set('user_id', user.id, {
        path: '/',
        maxAge: 60 * 60 * 24,
    });

    throw redirect(302, '/');
}
