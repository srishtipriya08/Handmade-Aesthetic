const express = require('express');
const router = express.Router();
const { getUsers, createUser , userLogin} = require('../controllers/userController');

router.get('/', getUsers);
router.post('/login', userLogin);
router.post('/register', createUser);

module.exports = router;
