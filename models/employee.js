var mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({

    name: String,
    address: String,
    position: String,
    salary: Number,
    update_at: {type: Date, default: Date.now},
});