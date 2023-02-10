const express = require('express');
const router = express.Router();

// Handlers
const employeeHandlers = require('./employee.handlers');

// list all employees
router.get('/', employeeHandlers.getAllEmployees);

// export employee routes
module.exports = router;
