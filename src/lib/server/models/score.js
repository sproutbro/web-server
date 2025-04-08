import { db } from '$lib/server/db.js';

export async function saveScore({ userId, game, score }) {
    await db.query(
        'INSERT INTO scores (user_id, game, score) VALUES ($1, $2, $3)',
        [userId, game, score]
    );
}

export async function getScores(game) {
    const result = await db.query(
        `SELECT
            ROW_NUMBER() OVER (ORDER BY scores.score DESC) AS rank,
            scores.score,
            users.nickname,
            TO_CHAR (scores.created_at, 'MM.DD') as created_at
        FROM
            scores
        JOIN 
            users 
        ON 
            scores.user_id = users.id
        WHERE
            scores.game = $1
        ORDER BY
            scores.score DESC
        LIMIT 
            9`,
        [game]
    );
    return result.rows;
}

export async function getScoreByGame(game) {
    const result = await db.query(
        `SELECT
            ROW_NUMBER() OVER (ORDER BY scores.score DESC) AS rank,
            scores.score,
            users.nickname,
            TO_CHAR (scores.created_at, 'MM.DD') as created_at
        FROM
            scores
        JOIN 
            users 
        ON 
            scores.user_id = users.id
        WHERE
            scores.game = $1
        ORDER BY
            scores.score DESC`,
        [game]
    );
    return result.rows;
}