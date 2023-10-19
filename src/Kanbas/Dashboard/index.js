import { Link } from "react-router-dom";
import db from "../Database";
import { FaFile, FaFilePen } from "react-icons/fa6";

function Dashboard() {
    const courses = db.courses;
    return (
        <div class="content">
            <div class="page-top">
                <h3>Dashboard</h3>
                <hr />
            </div>

            <div class="published-courses">
                <h5>Published Courses (7)</h5>
                <hr />
                <div class="d-flex flex-row flex-wrap">
                    {courses.map((course) => (
                        <Link
                            key={course._id} to={`/Kanbas/Courses/${course._id}`}
                            className="card course">
                            <span class="card-img-top" style={{"background-color" : "rgb(80, 92, 173)"}}></span>
                            <div class="card-body">
                                <p class="card-title">{course._id} {course.name}</p>
                                <p class="card-subtitle">{course._id}.{course.number}</p>
                                <p class="card-text">
                                    {course.startDate} {course.endDate}</p>
                                <FaFilePen className="card-icon"/>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Dashboard;