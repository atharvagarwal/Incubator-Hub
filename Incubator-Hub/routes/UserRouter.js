const express = require('express');
const userController = require('../Controller/UserController')
const AuthMiddleware = require('../Middleware/AuthMiddleware');

const router = express.Router()

router.get('/:id', userController.getUser);

module.exports = router;