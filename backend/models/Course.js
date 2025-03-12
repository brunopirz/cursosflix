// backend/models/Course.js
const { pool } = require('../config/db');

module.exports = {
  createCourse: async (title, description, youtubeEmbed, imageUrl, category) => {
    const query = `
      INSERT INTO courses (title, description, youtube_embed, image_url, category)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `;
    const values = [title, description, youtubeEmbed, imageUrl, category];
    const { rows } = await pool.query(query, values);
    return rows[0];
  },
  getCourses: async () => {
    const query = 'SELECT * FROM courses ORDER BY created_at DESC';
    const { rows } = await pool.query(query);
    return rows;
  },
  getCourseById: async (id) => {
    const query = 'SELECT * FROM courses WHERE id = $1';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  },
  updateCourse: async (id, title, description, youtubeEmbed, imageUrl, category) => {
    const query = `
      UPDATE courses
      SET title = $1, description = $2, youtube_embed = $3, image_url = $4, category = $5
      WHERE id = $6
      RETURNING *
    `;
    const values = [title, description, youtubeEmbed, imageUrl, category, id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  },
  deleteCourse: async (id) => {
    const query = 'DELETE FROM courses WHERE id = $1';
    await pool.query(query, [id]);
  }
};
