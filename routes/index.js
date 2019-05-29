const express = require('express');
const router = express.Router();

const studentHandler = require('./studentHandler.js');

router.post("/students", studentHandler.addStudent);
router.get("/students", studentHandler.getStudents);
router.get("/student/:id", studentHandler.getStudentById);
router.put("/student/:id", studentHandler.updateStudentByID);
router.put("/student", studentHandler.updateStudentByID);

module.exports = router;