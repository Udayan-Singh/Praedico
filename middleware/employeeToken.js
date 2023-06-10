const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validateEmployeeToken = asyncHandler(async (req,res,next) => {
    const token = req.cookies.access_token;
    if(!token){
        res.status(404);
        res.send("Unauthorized user, please Login or Register beforehand.");
    }

    try {
        const data = jwt.verify(token, process.env.SECRET_KEY);
        req.user = data;
    } catch (error) {
        return res.sendStatus(403);
    }

    return next();
});

module.exports = validateEmployeeToken;