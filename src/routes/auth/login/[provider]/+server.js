import { redirect, error } from '@sveltejs/kit';
import { AUTH_KAKAO_ID, AUTH_GOOGLE_ID, ORIGIN } from '$env/static/private';

const OAUTH_CONFIG = {
    kakao: (state) => {
        const redirectUri = `${ORIGIN}/auth/callback/kakao`;

        return `https://kauth.kakao.com/oauth/authorize` +
            `?client_id=${AUTH_KAKAO_ID}` +
            `&redirect_uri=${encodeURIComponent(redirectUri)}` +
            `&response_type=code` +
            `&state=${state}`;
    },

    google: (state) => {
        const redirectUri = `${ORIGIN}/auth/callback/google`;
        const scope = encodeURIComponent('openid email profile');

        return `https://accounts.google.com/o/oauth2/v2/auth` +
            `?client_id=${AUTH_GOOGLE_ID}` +
            `&redirect_uri=${encodeURIComponent(redirectUri)}` +
            `&response_type=code` +
            `&scope=${scope}` +
            `&state=${state}`;
    }
};

/** @type {import('./$types').RequestHandler} */
export function GET({ params, cookies }) {
    const provider = params.provider;

    const getAuthUrl = OAUTH_CONFIG[provider];

    if (!getAuthUrl) {
        throw error(400, `Unsupported OAuth provider: ${provider}`);
    }

    const state = crypto.randomUUID();
    cookies.set("state", state, { path: "/" });

    const authUrl = getAuthUrl(state);
    throw redirect(302, authUrl);
}