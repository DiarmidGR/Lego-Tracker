const express = require('express');
const router = express.Router();
const inventorySetsController = require('../controllers/inventorySets.controller');
const verifyToken = require('../middleware/auth.middleware');

router.get('/', verifyToken, inventorySetsController.getInventorySets);

module.exports = router;
