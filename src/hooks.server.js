/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    const userId = event.cookies.get('user_id');
    event.locals.user = userId ? { id: userId } : null;

    return resolve(event);
}
