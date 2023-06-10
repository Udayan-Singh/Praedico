const express = require('express');
const { getEmployee, getLogin, getRegisterPage, getDashboard } = require('../controllers/employeeController');
const validateEmployeeToken = require('../middleware/employeeToken');
const router = express.Router();


// GET ROUTES
router.get('/', getLogin); //SHOW LOGIN PAGE
router.get('/register', getRegisterPage); //SHOW REGISTER PAGE
router.get('/manager/:id',validateEmployeeToken, getDashboard); //SHOW MANAGER DASHBOARD PAGE. PRIVATE ROUTE
router.get('/manager/:id/createEmployee',validateEmployeeToken, getRegisterPage); //SHOW CREATE EMPLOYEE PAGE. PRIVATE ROUTE

// POST ROUTESs
router.post('/login', getEmployee); //EMPLOYEE LOGIN FUNCTIONALITY.

module.exports = router;