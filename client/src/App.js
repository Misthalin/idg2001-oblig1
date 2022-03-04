import React from 'react';
import './App.css'
import AppliedStudents from './components/AppliedStudents';
import FormSubmittions from './components/FormSubmittion';

const App = function () {
	return (
		<div class="body-margin">
		<h1 class="text-center">Course Registration</h1>
		<p class="text-center">Apply for Course: IDG1362 User-Centered Design</p>
			<FormSubmittions />
			<AppliedStudents />
		</div>
	);
}
export default App