import { Pool } from 'pg';

const pool = new Pool({
    user: 'admin',
    host: '192.168.1.23',
    database: 'todo',
    password: 'admin',
    port: 5432,
});

export default pool;