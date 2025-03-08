import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const connectionString = process.env.DATABASE_URL; // variável com a URL de conexão do Render

if (!connectionString) {
  throw new Error('DATABASE_URL não foi definida. Verifique o arquivo .env.');
}

const pool = new Pool({
  connectionString,
});

export default pool;
