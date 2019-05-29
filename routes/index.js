const express = require('express');
const router = express.Router();

const studentRoute = require('./studentRoute.js');

router.post("/students", studentRoute.addStudent);
router.get("/students", studentRoute.getStudents);
router.get("/student/:id", studentRoute.getStudentById);

module.exports = router;