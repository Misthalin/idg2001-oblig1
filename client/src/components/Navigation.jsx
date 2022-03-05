import { Link } from "react-router-dom";

const Navigation = function () {
    return (
        <nav>
            <Link to="/">Course Registration</Link> || {" "}
            <Link to="/applied_students">Applied Students</Link>
        </nav>
    )
}

export default Navigation;