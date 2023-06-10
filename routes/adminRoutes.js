const express = require('express');
const { registerEmployee, displayAllAdmin, createNewAdmin, createEmployee, createIntern, getLogin, postLogin, seeEmployees } = require('../controllers/adminController');
const validateToken = require('../middleware/adminToken');
const router = express.Router();

router.get('/list', displayAllAdmin);
router.get('/login', getLogin);

router.get('/dashboard',validateToken ,async (req,res) => {
    res.render('adminDashboard');
})

router.get('/seeEmployees',validateToken,seeEmployees)
router.get('/createEmployee',validateToken ,registerEmployee)

// POST ROUTES
router.post('/create',createNewAdmin); //CREATE A NEW ADMIN
router.post('/createEmployee',createEmployee) //CREATE A NEW EMPLOYEE
router.post('/login', postLogin)

module.exports = router;