const express = require('express');
const router = express.Router();
const setsController = require('../controllers/sets.controller');
const verifyToken = require('../middleware/auth.middleware');

router.get('/', verifyToken, setsController.getSets);

module.exports = router;
