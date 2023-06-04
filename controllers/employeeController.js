const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const Employee = require('../models/employeeModel');
const Intern = require('../models/internModel');

const getEmployeeList = asyncHandler(async (req,res) => {
    const employee = await Employee.find({});
    res.send(employee);
})

const getEmployee = asyncHandler(async (req,res) => {
    const {id} = req.params;
    
    const employee = await Employee.findById({_id: id});
    res.send(employee);
})

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

module.exports = {getEmployeeList, getEmployee, createIntern, getAllInterns}