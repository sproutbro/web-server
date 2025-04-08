import pkg from 'pg';
const { Pool } = pkg;

import { DATABASE_URL } from '$env/static/private';

export const db = new Pool({
    connectionString: DATABASE_URL
});
