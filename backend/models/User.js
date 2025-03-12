// backend/models/User.js
const { pool } = require('../config/db');

module.exports = {
  createUser: async (firstName, lastName, email, passwordHash) => {
    const query = `
      INSERT INTO users (first_name, last_name, email, password)
      VALUES ($1, $2, $3, $4)
      RETURNING id, first_name, last_name, email, role, created_at
    `;
    const values = [firstName, lastName, email, passwordHash];
    const { rows } = await pool.query(query, values);
    return rows[0];
  },
  findUserByEmail: async (email) => {
    const query = 'SELECT * FROM users WHERE email = $1';
    const { rows } = await pool.query(query, [email]);
    return rows[0];
  }
};
