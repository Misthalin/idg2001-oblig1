import React, { useState, useEffect } from 'react'
import axios from 'axios';

const FormSubmittion = function () {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [studentId, setStudentId] = useState("");
    const [age, setAge] = useState("");
    const [nationality, setNationality] = useState("");
    const [degreeProgramme, setDegreeProgramme] = useState("");

    function submitForm() {
        if (firstName === "") {
            alert("Please enter your first name");
            return;
        }
        if (lastName === "") {
            alert("Please enter your last name");
            return;
        }
        if (studentId === "") {
            alert("Please enter your student ID");
            return;
        }
        if (age === "") {
            alert("Please enter your age");
            return;
        }
        if (nationality === "") {
            alert("Please enter your nationality");
            return;
        }
        if (degreeProgramme === "") {
            alert("Please enter your degreeProgramme");
            return;
        }
        axios
            .post("/api/students", {
                firstName: firstName,
                lastName: lastName,
                studentId: studentId,
                age: age,
                nationality: nationality,
                degreeProgramme: degreeProgramme,
            })
            .then(function () {
                alert("Student successfully applied to course");
                window.location.reload();
            })
            .catch(function () {
                alert("Could not apply to course. Please try again");
            });
    }
    return (
        <form onSubmit={submitForm}>
            <input
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="Enter your first name"
            />
            <input
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Enter your last name"
            />
            <input
                onChange={(e) => setStudentId(e.target.value)}
                type="text"
                placeholder="Enter your student ID"
            />
            <input
                onChange={(e) => setAge(e.target.value)}
                type="text"
                placeholder="Enter your Age"
            />
            <input
                onChange={(e) => setNationality(e.target.value)}
                type="text"
                placeholder="Enter your nationality"
            />
            <input
                onChange={(e) => setDegreeProgramme(e.target.value)}
                type="text"
                placeholder="Enter your degree programme"
            />
            <input type="submit" />
        </form>
    );
}

export default FormSubmittion;