const { Router } = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = Router();

router.post('/', userController.create);
router.get('/:id', authController.validateToken, userController.getById);
router.get('/', authController.validateToken, userController.getAll);

module.exports = router;