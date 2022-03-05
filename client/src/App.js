import './App.css'
import Navigation from "./components/Navigation";
import CourseRegistration from "./routes/courseRegistration";

const App = function () {
	return (
		<div className="body-margin">
			<h1 className="text-center">Course Registration</h1>
			<Navigation />
			<div className="form">
				<p className="text-center">Apply for Course: IDG1362 User-Centered Design</p>
				<CourseRegistration />
			</div>
		</div>
	);
}
export default App