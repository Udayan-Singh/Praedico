const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../models/adminModel');
const Employee = require('../models/employeeModel');
require('dotenv').config();

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
    
    const {
        email,fname,password,employeeType,managedBy,
        lname, contact, aadhar, address, pincode, city,
        institute, description, role, startsAt, endsAt
    } = req.body;

    console.log(startsAt, endsAt);

    const hashedPassword = await bcrypt.hash(password, 10);
    let flag = false;

    if(employeeType === 'Head'){
        flag = true;
    }

    let manager_email = "";
    if( managedBy === ""){
        manager_email = null;
    }
    else{
        manager_email = managedBy;
    }
    const employee = await Employee.create({
        fname,
        lname,
        email,
        password: hashedPassword,
        isHead: flag,
        employeeType,
        managedBy: manager_email,
        contact,
        aadhar,
        address,
        pincode,
        city,
        institute,
        description,
        role,
        startsAt,
        endsAt,
    })

    console.log(employee);
    res.redirect('/admin/dashboard');

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

const getLogin = asyncHandler (async (req,res) => {
    res.render('adminLogin', {isAdmin: true})
})

const postLogin = asyncHandler (async (req,res) => {
    const {email, password} = req.body;

    if(!email || !password){
        res.send('Invalid credentials.');
    }

    const admin = await Admin.findOne({email: email});
    if(admin && await bcrypt.compare(password, admin.password)){
        const accessToken = jwt.sign({
            name: admin.name,
            email: admin.email,
        }
        , process.env.SECRET_KEY, {expiresIn: '2h'});

        res.cookie("access_token", accessToken, {
            httpOnly: true,
        });

        console.log(accessToken);
        console.log();
        console.log();

        return res.redirect('/admin/dashboard')
    }
})

const seeEmployees = asyncHandler (async (req,res) => {
    const employee = await Employee.find({});

    res.send(employee);
})

const registerEmployee = asyncHandler (async (req,res) => {
    res.render('newEmployee')
})
module.exports = {displayAllAdmin, createNewAdmin, createEmployee, createIntern, getLogin, postLogin, seeEmployees, registerEmployee};