const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Employee = require('../models/employeeModel');

// SHOW LOGIN PAGE
const getLogin = asyncHandler (async (req,res) => {
    res.render('index');
})

// SHOW REGISTER PAGE
const getRegisterPage = asyncHandler (async (req,res) => {
    res.render('register');
})

// LOGIN FUNCTIONALITY AFTER POST METHOD
const getEmployee = asyncHandler (async (req,res) => {

    const {email, password} = req.body;
    if(!email || !password){
        res.send("Please fill all fields")
    }

    const employee = await Employee.findOne({email});

    if(employee && await bcrypt.compare(password, employee.password)){

        const accessToken = jwt.sign({
            name: employee.fname,
            email: employee.email,
        }
        , process.env.SECRET_KEY, {expiresIn: '2h'});

        res.cookie("access_token", accessToken, {
            httpOnly: true,
        });

        if(employee.isHead){
            return res.redirect(`/employee/manager/${employee._id}`);
        }
        else{
            res.send("Hello");
        }
    }
        
    
})

// SHOW EMPLOYEES UNDER A MANAGER
const getDashboard = asyncHandler (async (req,res) => {

    const {id} = req.params;
    const manager = await Employee.findOne({_id: id});

    const managerEmail = manager.email;

    // Find all employees under manager
    const employees = await Employee.find({managedBy: managerEmail});
    res.render('employeeDashboard', {employees: employees})
})

module.exports = {getEmployee, getLogin, getRegisterPage, getDashboard};