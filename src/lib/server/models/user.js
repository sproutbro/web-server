import { db } from '$lib/server/db.js';

export async function saveOAuthUser({ id, nickname, provider }) {
    await db.query(
        `INSERT INTO users (id, nickname, provider)
     VALUES ($1, $2, $3)
     ON CONFLICT (id) DO NOTHING`,
        [id, nickname, provider]
    );
}

export async function findUserById(id) {
    const result = await db.query(
        `SELECT
            id,
            nickname,
            provider,
            TO_CHAR (created_at, 'YYYY-MM-DD') as created_at
        FROM
            users
        WHERE
            id = $1`,
        [id]
    );
    return result.rows[0] ?? null;
}
