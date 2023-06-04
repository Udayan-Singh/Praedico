const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const ejs = require('ejs');
const connectDb = require('./config/dbConnection');

connectDb();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/admin', require('./routes/adminRoutes'));
app.use('/employee', require('./routes/employeeRoutes'));
app.use('/intern', require('./routes/internRoutes'));


app.listen(5000, () => {
    console.log('Server running on port 5000');
})