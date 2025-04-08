import { requireGuest } from '$lib/server/auth.js';

/** @type {import('./$types').PageServerLoad} */
export function load({ locals }) {
    requireGuest(locals); // 로그인된 유저면 홈으로 튕김
}