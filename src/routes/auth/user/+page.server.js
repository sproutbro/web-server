import { requireUser } from '$lib/server/auth.js';
import { findUserById } from '$lib/server/models/user.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
    requireUser(locals);
    const user = await findUserById(locals.user.id);
    return { user };
}