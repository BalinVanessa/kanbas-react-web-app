import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignment,
} from "./assignmentsReducer";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisVertical, FaGripVertical, FaPlus, FaFilePen, FaCircleCheck } from "react-icons/fa6";


function Assignments() {
    const { courseId } = useParams();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments)
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);

    return (
        <div class="col modules">
            <div class="d-flex ">
                <input type="text" class="form-control me-auto w-25" placeholder="Search for Assignment" />
                <button class="btn btn-light kanbas ms-1">
                    <i class="fa-solid fa-plus"></i>
                    Group</button>
                <button class="btn btn-danger kanbas ms-1">
                    <i class="fa-solid fa-plus"></i>
                    Assignment</button>
                <button class="btn btn-light kanbas ms-1">
                    <FaEllipsisVertical class="fa-solid fa-ellipsis-vertical mb-1" />
                </button>
            </div>
            <hr id="assignments" />
            <div className="list-group mt-5">
                <li class="list-group-item list-group-item-secondary pt-3 pb-3 d-flex">
                    <FaGripVertical class="fa-solid fa-grip-vertical me-1 mt-2" />
                    <p className="mt-2">Assignments for {courseId}</p>
                    <div class="d-flex flex-row ms-auto">
                        <p class="rounded mt-2 pe-2 me-3">40% of Total</p>
                        <Link to={`/Kanbas/Courses/${courseId}/Assignments/Create`}><button
                            className="btn">
                            <FaPlus class="fa-solid fa-plus mb-1" /></button></Link>
                        <FaEllipsisVertical size={20} class="fa-solid fa-ellipsis-vertical mt-2" />
                    </div>

                </li>
                {courseAssignments.map((assignment) => (
                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item d-inline-flex">
                        <FaGripVertical size={16} class="me-2 mt-3" />
                        <FaFilePen size={16} class="me-3 mt-3 text-success" />
                        <div class="assignment-details d-flex flex-column">
                            <a href="edit.html">{assignment.title}</a>
                            <p>Week 0</p>
                            <p>Due: Sep 18, 2022 at 11:59pm | 100 pts</p>
                        </div>

                        <div class="d-flex flex-row float-end ms-auto pt-3">
                            <FaCircleCheck size={20} class="fa-solid fa-circle-check me-3 mt-1" style={{ "color": "#00db25" }} />
                            <FaEllipsisVertical size={20} class="fa-solid fa-ellipsis-vertical pt-1" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Assignments;