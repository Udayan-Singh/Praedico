const express = require('express');
const { displayAllAdmin, createNewAdmin, createEmployee, createIntern } = require('../controllers/adminController');
const router = express.Router();

router.get('/', async (req,res) => {
    res.send('Admin info')
});

router.get('/list', displayAllAdmin);

// POST ROUTES
router.post('/create',createNewAdmin); //CREATE A NEW ADMIN
router.post('/createEmployee',createEmployee) //CREATE A NEW EMPLOYEE
router.post('/createIntern', createIntern) //CREATE A NEW INTERN

module.exports = router;