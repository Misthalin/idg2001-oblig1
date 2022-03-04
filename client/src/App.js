import React from 'react';
import AppliedStudents from './components/AppliedStudents';
import FormSubmittions from './components/FormSubmittion';

const App = function () {
	return (
		<div>
		<h1>Apply for Course: IDG1362 User-Centered Design</h1>
			<FormSubmittions />
			<AppliedStudents />
		</div>
	);
}
export default App