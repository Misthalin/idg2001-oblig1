import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './AppliedStudents.css'

const AppliedStudents = function () {
    const [students, setStudents] = useState(null);

    useEffect(() => {
		axios
			.get("/api/students")
			.then((students) => setStudents(students))
			.catch((err) => console.log(err));
	}, []);

    return (
		<>
			{students === null ? (
				<p>Loading...</p>
			) : students.length === 0 ? (
				<p>No user available</p>
			) : (
						<>
							<h2>Applied Students</h2>
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
								</ul>
                                <button>Edit</button>
                                <button>Delete</button>
                                </div>
							))}
						</>
					)}
        </>
    )
}

export default AppliedStudents;