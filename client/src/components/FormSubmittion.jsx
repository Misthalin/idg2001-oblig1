import React, { useState } from 'react'
import axios from 'axios';
import './FormSubmittion.css'

const FormSubmittion = function () {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [studentId, setStudentId] = useState("");
    const [age, setAge] = useState("");
    const [nationality, setNationality] = useState("");
    const [degreeProgramme, setDegreeProgramme] = useState("");

    const submitForm = (e) => {
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

        e.preventDefault();
        const answer = window.confirm("Are you sure you want to apply to IDG1362 User-centered design?");
        if (answer) {
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
                alert("You have successfully applied to course IDG1362");
                window.location.reload();
            })
            .catch(function () {
                alert("Could not apply to course. Please try again");
            });
        } else {
            alert("Registration rejected.")
        }
    }

    return (
        <form onSubmit={submitForm}>
            <input
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="First name"
            />
            <input
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Last name"
            />
            <input
                onChange={(e) => setStudentId(e.target.value)}
                type="text"
                placeholder="Student ID"
            />
            <input
                onChange={(e) => setAge(e.target.value)}
                type="text"
                placeholder="Age"
            />
            <input
                onChange={(e) => setNationality(e.target.value)}
                type="text"
                placeholder="Nationality"
            />
            <input
                onChange={(e) => setDegreeProgramme(e.target.value)}
                type="text"
                placeholder="Degree programme"
            />
            <input type="submit" value="Submit" id="formSubmit"/>
        </form>
    );
}
export default FormSubmittion;