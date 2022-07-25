const { Router } = require('express');
const categoryController = require('../controllers/categoryController');
const authController = require('../controllers/authController');

const router = Router();

router.post('/', authController.validateToken, categoryController.create);
// router.get('/:id', authController.validateToken, categoryController.getById);
// router.get('/', authController.validateToken, categoryController.getAll);

module.exports = router;