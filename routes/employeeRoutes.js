const express = require('express');
const { getEmployeeList, getEmployee, createIntern, getAllInterns } = require('../controllers/employeeController');
const router = express.Router();

router.get('/', getEmployeeList);
router.get('/:id', getEmployee);
router.get('/api/interns', getAllInterns);

router.post('/createIntern',createIntern);

module.exports = router;