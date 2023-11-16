import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import { FaBars } from "react-icons/fa6";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { useState, useEffect } from "react";
import axios from "axios";


function Courses() {
    const API_BASE = process.env.REACT_APP_API_BASE;
    const URL = `${API_BASE}/courses`;
    const { courseId } = useParams();
    const [course, setCourse] = useState({});
    const findCourseById = async (courseId) => {
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        setCourse(response.data);
    };
    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);

    const { pathname } = useLocation();
    return (
        <div>
            <div class="page-top d-none d-md-block">
                <div class="d-flex flex-row">
                    <FaBars className="inline-icon" />
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item kanbas"><a href="#">{course.name}</a></li>
                            <li class="breadcrumb-item active" aria-current="page">{course._id}</li>
                        </ol>
                    </nav>
                </div>
                <hr />
            </div>

            <div class="profile w-100">
                <div className="col-2 col-xl-1 d-none d-md-block acc-nav">
                    <CourseNavigation />
                </div>
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Modules" element={<Modules />} />
                    <Route path="Assignments" element={<Assignments />} />
                    <Route
                        path="Assignments/:assignmentId"
                        element={<AssignmentEditor />}
                    />
                    <Route path="Grades" element={<Grades />} />
                </Routes>
            </div>
        </div>
    );
}
export default Courses;