import { DATABASE_URL } from '$env/static/private';

import pkg from 'pg';
const { Pool } = pkg;

export const db = new Pool({
    connectionString: DATABASE_URL
});
