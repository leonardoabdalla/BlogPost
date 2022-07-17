const { Router } = require('express');
const authRouter = require('./authRouter');

const router = Router();

router.use('/login', authRouter);

module.exports = router;