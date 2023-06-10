const express = require('express');
const { registerEmployee, createEmployee,  getLogin, postLogin, seeEmployees, adminDashboard } = require('../controllers/adminController');
const validateToken = require('../middleware/adminToken');
const router = express.Router();


// GET ROUTES
router.get('/login', getLogin); //SHOW LOGIN PAGE 
router.get('/dashboard',validateToken ,adminDashboard) //SHOW ADMIN DASHBOARD AFTER AUTHENTICATION. PRIVATE ROUTE
router.get('/seeEmployees',validateToken,seeEmployees) //SHOW ALL EMPLOYEES. PRIVATE ROUTE
router.get('/createEmployee',validateToken ,registerEmployee) //SHOW REGISTER EMPLOYEE PAGE. PRIVATE ROUTE

// POST ROUTES
router.post('/createEmployee',createEmployee) //CREATE A NEW EMPLOYEE
router.post('/login', postLogin) //LOGIN

module.exports = router;