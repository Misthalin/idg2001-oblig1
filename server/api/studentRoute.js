const express = require('express');
const router = express.Router();
const { getStudents, setStudent, updateStudent, deleteStudent } = require('./studentController');

router.route('/').get(getStudents).post(setStudent);
router.route('/:id').delete(deleteStudent).put(updateStudent);

module.exports = router;