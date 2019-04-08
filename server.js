const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
// bodyparser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// importing routes
const student = require('./routes/student')

// routes middleware
app.use('/api',student)

// making server on 
app.listen(port, () => {
    console.log(`App started at port no : ${port}`);
})