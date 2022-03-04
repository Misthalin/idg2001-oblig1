const express = require('express');
const router = express.Router()

const Student = require('../models/student');

router.get('/', (req, res) => {
    Student.find()
        .then(students => res.json(students))
        .catch(err => console.log(err))
})

router.post('/', (req, res) => {
    const { firstName, lastName, studentId, age, nationality, degreeProgramme  } = req.body;
    const newStudent = new Student({
        firstName: firstName, 
        lastName: lastName,
        studentId: studentId,
        age: age,
        nationality: nationality,
        degreeProgramme: degreeProgramme,
    })
    newStudent.save()
        .then(() => res.json({
            message: "Student successfully applied to course"
        }))
        .catch(err => res.status(400).json({
            "error": err,
            "message": "Error applying to course"
        }))
})
module.exports = router 