// backend/config/db.js
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,       // Ex.: "postgres" (nome do serviço no docker-compose)
  port: process.env.DB_PORT,       // Ex.: 5432
  user: process.env.DB_USER,       // Ex.: "cursosflix_user"
  password: process.env.DB_PASSWORD, // Ex.: "StrongP@ssw0rd_2025!"
  database: process.env.DB_NAME    // Ex.: "cursosflix"
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle PostgreSQL client', err);
  process.exit(-1);
});

module.exports = { pool };
