import { db } from '$lib/server/db.js';

export async function findQuizScoreAll() {
    const result = await db.query(
        `SELECT
            ROW_NUMBER() OVER (ORDER BY quiz.score DESC) AS rank,
            quiz.score,
            users.nickname
        FROM
            quiz
        JOIN 
            users 
        ON 
            quiz.user_id = users.id
        ORDER BY
            quiz.score DESC`
    );

    return result.rows;
}

export async function findQuizScore() {
    const result = await db.query(
        `SELECT
            ROW_NUMBER() OVER (ORDER BY quiz.score DESC) AS rank,
            quiz.score,
            users.nickname
        FROM
            quiz
        JOIN 
            users 
        ON 
            quiz.user_id = users.id
        ORDER BY
            quiz.score DESC
        LIMIT 
            9`
    );

    return result.rows;
}