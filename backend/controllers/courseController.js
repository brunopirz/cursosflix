// backend/controllers/courseController.js
const Course = require('../models/Course');

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.getCourses();
    res.json(courses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar cursos' });
  }
};

exports.createCourse = async (req, res) => {
  const { title, description, youtubeEmbed, imageUrl, category } = req.body;
  try {
    const course = await Course.createCourse(title, description, youtubeEmbed, imageUrl, category);
    res.status(201).json(course);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao criar curso' });
  }
};

exports.updateCourse = async (req, res) => {
  const { id } = req.params;
  const { title, description, youtubeEmbed, imageUrl, category } = req.body;
  try {
    const course = await Course.updateCourse(id, title, description, youtubeEmbed, imageUrl, category);
    if (!course) return res.status(404).json({ message: 'Curso não encontrado' });
    res.json(course);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao atualizar curso' });
  }
};

exports.deleteCourse = async (req, res) => {
  const { id } = req.params;
  try {
    await Course.deleteCourse(id);
    res.json({ message: 'Curso deletado com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao deletar curso' });
  }
};
