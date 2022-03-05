import './App.css'
import Navigation from "./components/Navigation";
import CourseRegistration from "./routes/courseRegistration";

const App = function () {
	return (
		<div class="body-margin">
		<h1 class="text-center">Course Registration</h1>
		<Navigation />
		<p class="text-center">Apply for Course: IDG1362 User-Centered Design</p>
		<CourseRegistration/>
		</div>
	);
}
export default App