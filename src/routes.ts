const app = require('express')();

const employeeRoutes = require('./api/employee');
app.use('/api/employee', employeeRoutes);

module.exports = app;
