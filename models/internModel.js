const mongoose = require('mongoose');

const internSchema = mongoose.Schema({
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

    managedBy: {
        type: String,
    },
})

module.exports = mongoose.model("Intern", internSchema);