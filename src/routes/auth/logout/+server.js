import { redirect } from '@sveltejs/kit';

export function GET({ cookies }) {
    cookies.delete('auth_token', { path: '/' });

    throw redirect(302, '/');
}
