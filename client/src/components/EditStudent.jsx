import React from "react";
import axios from "axios";
import './FormSubmittion.css';

class EditStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            studentId: this.props.studentId,
            age: this.props.age,
            nationality: this.props.nationality,
            degreeProgramme: this.props.degreeProgramme,
            _id: this.props._id

        }
        this.editFirstName = this.editFirstName.bind(this);
        this.editLastName = this.editLastName.bind(this);
        this.editStudentId = this.editStudentId.bind(this);
        this.editAge = this.editAge.bind(this);
        this.editNationality = this.editNationality.bind(this);
        this.editDegreeProgramme = this.editDegreeProgramme.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    editFirstName = event => {
        this.setState({ firstName: event.target.value})
    }
    editLastName = event => {
        this.setState({ lastName: event.target.value})
    }
    editStudentId = event => {
        this.setState({ studentId: event.target.value})
    }
    editAge = event => {
        this.setState({ age: event.target.value})
    }
    editNationality = event => {
        this.setState({ nationality: event.target.value})
    }
    editDegreeProgramme = event => {
        this.setState({ degreeProgramme: event.target.value})
    }

    handleSubmit = event => {
        if (this.state.firstName === "") {
            alert("Please enter your first name");
            return;
        }
        if (this.state.lastName === "") {
            alert("Please enter your last name");
            return;
        }
        if (this.state.studentId === "") {
            alert("Please enter your student ID");
            return;
        }
        if (this.state.age === "") {
            alert("Please enter your age");
            return;
        }
        if (this.state.nationality === "") {
            alert("Please enter your nationality");
            return;
        }
        if (this.state.degreeProgramme === "") {
            alert("Please enter your degreeProgramme");
            return;
        }
        
        event.preventDefault();
        const answer = window.confirm(`Are you sure you want to edit ${this.props.firstName}'s application?`);
        if (answer) {
            axios
            .put(`/api/students/${this.state._id}`, {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                studentId: this.state.studentId,
                age: this.state.age,
                nationality: this.state.nationality,
                degreeProgramme: this.state.degreeProgramme,
            })
            .then(function () {
                alert("The edit was successfull");
                window.location.reload();
            })
            .catch(function () {
                alert("Could not edit application. Please try again");
            });
        } else {
            alert("Edit rejected.")
        }
    }

    render() {
        return (
            <>
                <form>
                    <input
                        type="text"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.editFirstName}
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.editLastName}
                    />
                    <input
                        type="text"
                        name="studentId"
                        value={this.state.studentId}
                        onChange={this.editStudentId}
                    />
                    <input
                        type="text"
                        name="age"
                        value={this.state.age}
                        onChange={this.editAge}
                    />
                    <input
                        type="text"
                        name="nationality"
                        value={this.state.nationality}
                        onChange={this.editNationality}
                    />
                    <input
                        type="text"
                        name="degreeProgramme"
                        value={this.state.degreeProgramme}
                        onChange={this.editDegreeProgramme}
                    />
                    <input type="submit" value="Submit" onClick={this.handleSubmit} />
                </form>
            </>
        )
    }
}

export default EditStudent;