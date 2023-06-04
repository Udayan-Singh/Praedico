const express = require('express');
const { getIntern } = require('../controllers/internController');
const router = express.Router();

router.get('/:id', getIntern)

module.exports = router;