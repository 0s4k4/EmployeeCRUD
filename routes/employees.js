var express = require('express');
var routes = express.Router();

var employee = require('express');
const app = require('../app.js');
const { save } = require('../controllers/EmployeeController.js');
var router = express.Router();

var employee = require("../controllers/EmployeeController.js");

//get all
router.get('/', employee.list);

//get single employe by id
router.get('/show/:id', employee.show);

//create employee
router.get('/get', employee.create);

//save emplayee
router.post('/save', employee.save);

//edit 
router.get('/save', employee.edit);

//update
router.post('/update:id', employee.update);

//delete
router.delete('/delete/:id', employee.delete);

module.exports = router;

var emplayees = require('./routes/employees');
app.use('/employees', emplayees);