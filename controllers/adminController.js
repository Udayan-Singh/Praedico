const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const Admin = require('../models/adminModel');
const Employee = require('../models/employeeModel');
const Intern = require('../models/internModel');

// Show all admins
const displayAllAdmin = asyncHandler(async (req,res) => {
    const admin = await Admin.find({});
    res.send(admin);
})

// Create a new admin
const createNewAdmin = asyncHandler(async (req,res) => {
    const {name,email,password} = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = await Admin.create({
        email,
        name,
        password: hashedPassword
    })

    res.send(admin);

})

const createEmployee = asyncHandler(async (req,res) => {
    
    const {email,name,password,employeeType} = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    let flag = false;

    if(employeeType === 'Head'){
        flag = true;
    }
    const employee = await Employee.create({
        name,
        email,
        password: hashedPassword,
        isHead: flag,
        employeeType,
        managedBy: null,
    })

    res.send(employee)

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
module.exports = {displayAllAdmin, createNewAdmin, createEmployee, createIntern};