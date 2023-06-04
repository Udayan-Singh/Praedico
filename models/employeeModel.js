const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    email:{
        type: String,
        required: [true, "Please add email"],
        unique: [true, "Email address already taken"]
    },

    name: {
        type: String,
        required: [true, "Please add name"],
    },

    password: {
        type: String,
        required: [true, "Please add password"]
    },

    isHead: {
        type: Boolean,
    },

    employeeType: {
        type: String,
        required: [true, "Please add employee Designation."]

    },

    managedBy: {
        type: String,
    }
})

module.exports = mongoose.model("Employee", employeeSchema);