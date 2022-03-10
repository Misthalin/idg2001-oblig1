const asyncHandler = require('express-async-handler');

const Student = require('./studentModel');

const getStudents = asyncHandler(async (req, res) => {
    const students = await Student.find();
    res.status(200).json(students);
})

const setStudent = asyncHandler(async (req, res) => {
    const { firstName, lastName, studentId, age, nationality, degreeProgramme  } = req.body;
    if(!firstName || !lastName || !studentId || !age || !nationality || !degreeProgramme) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    const student = await Student.create({
        firstName: firstName,
        lastName: lastName,
        studentId: studentId,
        age: age,
        nationality: nationality,
        degreeProgramme: degreeProgramme
    })

    res.status(200).json(student)
})

const updateStudent = asyncHandler(async (req, res) => {
    const student = await Student.findById(req.params.id)

    if(!student) {
        res.status(400)
        throw new Error('Student not found')
    }

    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedStudent)
})

const deleteStudent = asyncHandler(async (req, res) => {
    const student = await Student.findById(req.params.id)

    if(!student) {
        res.status(400)
        throw new Error ('Student not found')
    }

    await student.remove()

    res.status(200).json({ id: req.params.id })
})


module.exports = {
    getStudents,
    setStudent,
    updateStudent,
    deleteStudent
}