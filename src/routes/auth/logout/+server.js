import { redirect } from '@sveltejs/kit';

export function GET({ cookies }) {
    cookies.delete('user_id', { path: '/' });

    throw redirect(302, '/');
}
