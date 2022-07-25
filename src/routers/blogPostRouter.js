const { Router } = require('express');
const blogPostController = require('../controllers/blogPostController');
const authController = require('../controllers/authController');

const router = Router();

router.get('/', authController.validateToken, blogPostController.getAll);

module.exports = router;