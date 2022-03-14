import React from "react";
import axios from "axios";
import moment from 'moment';
import Navigation from "./Navigation";
import EditStudent from "./EditStudent";
import "./AppliedStudents.css";

class AppliedStudents extends React.Component {

	constructor() {
		super();
		this.state = { showEdit: false, students: [] }
	}

	_showEdit = (bool) => {
		this.setState({
			showEdit: bool
		});
	}

	componentDidMount() {
		axios
			.get("/api/students")
			.then(res => {
				const students = res.data;
				this.setState({ students })
			})
			.catch((err) => console.log(err));
	}

	onDelete = (id) => {
		axios
			.delete(`/api/students/${id}`)
			.then(function () {
				window.location.reload();
			})
	}
	render() {


		return (
			<div className="body-margin">
				<h1 className="text-center">Applied Students</h1>
				<Navigation />
				{this.state.students === null ? (
					<p>Loading...</p>
				) : this.state.students.length === 0 ? (
					<p>No user available</p>
				) : (<>
					<h2>Students Applied For IDG1362:</h2>
					<div className="container">
						{this.state.students.map((student, index) => (
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
										Submitted: {moment(student.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
									</li>
								</ul>
								<button onClick={this._showEdit.bind(null, true)}>Edit</button>
								<button onClick={() => this.onDelete(student._id)}>Delete</button>
								{ this.state.showEdit && (<EditStudent formVisibility={true} 
																	   firstName={student.firstName} 
																	   lastName={student.lastName}
																	   age={student.age}
																	   studentId={student.studentId}
																	   nationality={student.nationality}
																	   degreeProgramme={student.degreeProgramme}
																	   _id={student._id}/>)}
							</div>
						))}
					</div>
				</>
						)}
			</div>
		)
	}
}

export default AppliedStudents;