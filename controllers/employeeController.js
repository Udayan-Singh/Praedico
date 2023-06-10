const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const Employee = require('../models/employeeModel');

const getEmployeeList = asyncHandler(async (req,res) => {
    const employee = await Employee.find({});
    res.send(employee);
})

// const getEmployee = asyncHandler(async (req,res) => {
//     const {id} = req.params;
    
//     const employee = await Employee.findById({_id: id});
//     res.send(employee);
// })

const createIntern = asyncHandler(async (req,res) => {
    const {email, name, password, managedBy} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const intern = await Intern.create({
        name,
        email,
        managedBy,
        password: hashedPassword
    });

    res.send(intern)
})

const getAllInterns = asyncHandler(async (req,res) => {
    const intern = await Intern.find({});
    res.send(intern);
})

const getLogin = asyncHandler (async (req,res) => {
    res.render('index');
})

const getRegisterPage = asyncHandler (async (req,res) => {
    res.render('register');
})

const getEmployee = asyncHandler (async (req,res) => {

    const {email, password} = req.body;
    if(!email || !password){
        res.send("Please fill all fields")
    }

    const employee = await Employee.findOne({email});

    if(await bcrypt.compare(password, employee.password)){

        if(employee.isHead){
            return res.redirect(`/employee/manager/${employee._id}`);
        }
        else{
            res.send("Hello");
        }
    }
        
    
})

const getRegister = asyncHandler (async (req,res) => {

    const {id} = req.params;
    const manager = await Employee.findOne({_id: id});
    res.render('managerCreateNewEmployee', {manager:manager});
})

const getDashboard = asyncHandler (async (req,res) => {

    const {id} = req.params;
    const manager = await Employee.findOne({_id: id});

    const managerEmail = manager.email;

    // Find all employees under manager
    const employees = await Employee.find({managedBy: managerEmail});
    res.render('employeeDashboard', {employees: employees})
})
module.exports = {getEmployeeList, getEmployee, createIntern, getAllInterns, getLogin, getRegisterPage, getDashboard};