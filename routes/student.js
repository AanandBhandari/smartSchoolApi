const Router = require('express').Router();
const students = require('../controllers/students')

Router.get('/',students.dashboard);
module.exports = Router;