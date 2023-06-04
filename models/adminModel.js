const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
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
})

module.exports = mongoose.model("Admin", adminSchema);