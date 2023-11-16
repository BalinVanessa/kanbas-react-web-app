import './index.css';
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { FaGlasses, FaAngleDown, FaBars } from 'react-icons/fa6';
import db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from 'axios';


function Kanbas() {
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState({
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });

    const URL = "http://localhost:4000/api/courses";
    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };
    useEffect(() => {
        findAllCourses();
    }, []);


    const addCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses([
            response.data,
            ...courses,
        ]);
        setCourse({ name: "" });
    };


    const deleteCourse = async (course_id) => {
        const response = await axios.delete(
            `${URL}/${course_id}`
        );
        setCourses(courses.filter((c) => c._id !== course_id));
    };



    const updateCourse = async () => {
        const response = await axios.put(
            `${URL}/${course._id}`,
            course
        );
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return response.data;
                }
                return c;
            })
        );
        setCourse({ name: "" });
    };




    return (
        <Provider store={store}>
            <div>
                <div class="responsive-nav d-block d-md-none bg-dark p-3 mb-3">
                    <div class="row">
                        <a href="topnavsidebar.html" class="pt-3 col-1"><FaBars class="fa-solid fa-bars" /></a>
                        <div class="nav-title col pt-1">
                            <h6>CS4550.12631.202410</h6>
                            <h6>Modules</h6>
                        </div>
                        <div class="flex-row flex-nowrap d-flex col-2 text-center pt-3 justify-content-end">
                            <FaGlasses class="fa-solid fa-glasses mt-1 me-3" />
                            <a href="#"><FaAngleDown class="fa-solid fa-angle-down" /></a>
                        </div>

                    </div>
                </div>

                <div class="screen">
                    <KanbasNavigation />

                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Navigate to="Dashboard" />} />
                            <Route path="Account" element={<h1>Account</h1>} />
                            <Route path="Dashboard"
                                element={<Dashboard
                                    courses={courses}
                                    course={course}
                                    setCourse={setCourse}
                                    addNewCourse={addCourse}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse} />} />
                            <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
                        </Routes>

                    </div>
                </div>
            </div>
        </Provider>
    );
}
export default Kanbas;