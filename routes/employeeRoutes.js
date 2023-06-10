const express = require('express');
const { getEmployee, createIntern, getAllInterns, getLogin, getRegisterPage, getDashboard } = require('../controllers/employeeController');
const router = express.Router();

router.get('/', getLogin);
router.get('/register', getRegisterPage);
router.get('/api/interns', getAllInterns);
router.get('/manager/:id', getDashboard);
router.get('/manager/:id/createEmployee', getRegisterPage);
// router.get('/login', getLogin);

router.post('/createIntern',createIntern);
router.post('/login', getEmployee);

module.exports = router;