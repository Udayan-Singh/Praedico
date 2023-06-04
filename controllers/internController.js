const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const Intern = require('../models/internModel');

const getIntern = asyncHandler(async (req,res) => {
    const {id} = req.params;

    const intern = await Intern.findById({_id: id});
    res.send(intern);
})

module.exports = {getIntern}