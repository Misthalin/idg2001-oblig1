import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import "./AppliedStudents.css";
//NEEDS TO BE ORDERED BY DATE SUBMITTED!
const AppliedStudents = function () {
	const [students, setStudents] = useState(null);

	useEffect(() => {
		axios
			.get("/api/students")
			.then((students) => setStudents(students))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="body-margin">
		<h1 className="text-center">Applied Students</h1>
		<Navigation />
			{students === null ? (
				<p>Loading...</p>
			) : students.length === 0 ? (
				<p>No user available</p>
			) : (<>
				<h2>Students Applied For IDG1362:</h2>
				<p>REMEMBER TO IMPLEMENT: ORDER BY DATE OF SUBMITTION</p>
				<div className="container">
					{students.data.map((student, index) => (
						<div key={index} className="student-card">
							<ul>
								<li>
									First name: {student.firstName}
								</li>
								<li>
									Last name: {student.lastName}
								</li>
								<li>
									Age: {student.age}
								</li>
								<li>
									Student ID: {student.studentId}
								</li>
								<li>
									Nationality: {student.nationality}
								</li>
								<li>
									Degree Programme: {student.degreeProgramme}
								</li>
								<li>
									Date submitted:
								</li>
							</ul>
							<button>Edit</button>
							<button>Delete</button>
						</div>
					))}
				</div>
			</>
					)}
		</div>
	)
}

export default AppliedStudents;