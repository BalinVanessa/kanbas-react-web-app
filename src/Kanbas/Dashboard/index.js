import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import { FaFile, FaFilePen } from "react-icons/fa6";

function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
) {
    return (
        <div class="content">
            <div class="page-top">
                <h3>Dashboard</h3>
                <hr />
            </div>

            <div class="published-courses">
                <h5>Published Courses ({courses.length})</h5>
                <hr />
                <h5>Add/Edit Course</h5>
                <input value={course.name} className="form-control mb-2"
                    onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                <input value={course.number} className="form-control mb-2"
                    onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                <div className="d-flex mb-3">
                    <input value={course.startDate} className="form-control me-2" type="date"
                        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                    <input value={course.endDate} className="form-control" type="date"
                        onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
                </div>

                <button onClick={addNewCourse} className="btn btn-danger kanbas me-1">
                    Add
                </button>
                <button onClick={updateCourse} className="btn btn-light kanbas">
                    Update
                </button>


                <div class="d-flex flex-row flex-wrap mt-5">
                    {courses.map((course) => (
                        <Link
                            key={course._id} to={`/Kanbas/Courses/${course._id}`}
                            className="card course">
                            <span class="card-img-top" style={{ "background-color": "rgb(80, 92, 173)" }}></span>
                            <div class="card-body">
                                <p class="card-title">{course._id} {course.name}</p>
                                <p class="card-subtitle">{course._id}.{course.number}</p>
                                <p class="card-text">
                                    {course.startDate} {course.endDate}</p>
                                <div className="d-flex">
                                    <FaFilePen className="card-icon mt-2 me-auto" />
                                    <button
                                        className="btn btn-light kanbas me-1"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }}>
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-light kanbas"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course._id);
                                        }}>
                                        Delete
                                    </button>

                                </div>

                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Dashboard;