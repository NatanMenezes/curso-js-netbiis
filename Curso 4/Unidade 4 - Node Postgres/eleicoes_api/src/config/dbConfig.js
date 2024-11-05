import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'root',
    database: 'api_eleicoes',
    port: 5432
})

export default pool;