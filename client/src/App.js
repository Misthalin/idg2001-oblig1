import "./App.css";
import Navigation from "./components/Navigation";
import CourseRegistration from "./routes/courseRegistration";
function measurePerf(t0, t1, t2, t3, text) {
  const result = t3 - t0 - (t2 - t1);
  console.log(`${text}: ${result}`);
}

const App = function () {
  measurePerf(1647958149849, 1647958150124, 1647958150222, 1647958150175, "Desktop/WiFi");
  measurePerf(1647959399799, 1647959400106, 1647959400202, 1647959400210, "Mobile/WiFi");
  measurePerf(1647959539774, 1647959540261, 1647959540353, 1647959540387, "Mobile/4G");
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
};
export default App;
