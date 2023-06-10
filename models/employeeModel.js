const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    email:{
        type: String,
        required: [true, "Please add email"],
        unique: [true, "Email address already taken"]
    },

    password:{
        type: String,
        required: [true, "Please add password"],
    },

    isHead:{
        type: Boolean,
    },
    fname: {
        type: String,
        required: [true, "Please add first name"],
    },

    lname: {
        type: String,
        required: [true, "Please add first name"],
    },

    contact: {
        type: String,
        required: [true, "Please add contact number"],
    },

    aadhar: {
        type: String,
        required: [true, "Please add aadhar number"]
    },

    address: {
        type: String,
        required: [true, "Please add address"],
    },

    pincode : {
        type: String,
        required: [true, "Please add pincode"],
    },

    city : {
        type: String,
        required: [true, "Please add city"],
    },
    

    institute : {
        type: String,
        required: [true, "Please add institute."],
    },

    description : {
        type: String,
    },

    employeeType:{
        type: String,
        required: [true, "Please add employee type."]
    },

    role:{
        type: String,
        required: [true, "Please add role."]
    },
    
    startsAt:{
        type: Date,
        required: [true, "Please add start date"]
    },

    endsAt: {
        type: Date,
        required: [true, "Please add end date."]
    },

    managedBy: {
        type: String,
    },
})

module.exports = mongoose.model("Employee", employeeSchema);