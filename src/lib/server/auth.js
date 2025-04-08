import { redirect } from '@sveltejs/kit';

export function requireUser(locals) {
    if (!locals.user) {
        throw redirect(302, '/auth/login');
    }
}

export function requireGuest(locals) {
    if (locals.user) {
        throw redirect(302, '/');
    }
}