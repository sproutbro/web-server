import { db } from '$lib/server/db.js';

export async function saveQnA({ user_id, title, content }) {
    const result = await db.query(
        `INSERT INTO 
            qna (user_id, title, content) 
        VALUES 
            ($1, $2, $3)
        RETURNING 
            id`,
        [user_id, title, content]
    );
    return result.rows[0].id;
}

export async function getQnAs(limit) {
    const result = await db.query(
        `SELECT
            qna.id,
            qna.title,
            users.nickname,
            TO_CHAR (qna.created_at, 'YYYY-MM-DD') as created_at
        FROM
            qna
        JOIN
            users
        ON
            qna.user_id = users.id
        ORDER BY 
            id DESC
        LIMIT $1`,
        [limit]
    );
    return result.rows;
}

export async function findQnAById(id) {
    const result = await db.query(
        `SELECT
            qna.title,
            qna.content,
            users.nickname,
            TO_CHAR (qna.created_at, 'YYYY-MM-DD') as created_at
        FROM
            qna
        JOIN
            users
        ON
            qna.user_id = users.id
        WHERE
            qna.id = $1`,
        [id]
    );
    return result.rows[0] ?? null;
}