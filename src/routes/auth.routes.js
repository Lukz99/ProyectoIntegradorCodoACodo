const express = require('express');
const router = express.Router();
const { login, doLogin, register, registerRoute, logout } = require('../controllers/auth.controllers');

router.get('/login', login);
router.post('/login', doLogin);
router.get('/register', register);
router.post('/register', registerRoute);
router.get('/logout', logout);

module.exports = router;