const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const ejs = require('ejs');
const connectDb = require('./config/dbConnection');
const cookieParser = require('cookie-parser');

connectDb();

app.set('view engine', 'ejs');
app.use(express.static("./public"))
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());

app.get('/', (req,res) => {
    res.redirect('/employee')
})

app.use('/admin', require('./routes/adminRoutes'));
app.use('/employee', require('./routes/employeeRoutes'));




app.listen(5000, () => {
    console.log('Server running on port 5000');
})