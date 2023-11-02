import { React, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaPlus, FaGripVertical, FaCircleCheck, FaEllipsisVertical, FaTrash, FaPen } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer";

function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();


    return (
        <div className="col modules">
            <div class="d-flex float-end">
                <button class="btn btn-light kanbas ms-1">Collapse All</button>
                <button class="btn btn-light kanbas ms-1">View Progress</button>
                <div class="dropdown">
                    <button class="btn btn-light kanbas dropdown-toggle ms-1" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <FaCircleCheck class="me-1" style={{ "color": "#22e01f" }} />
                        Publish All</button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Publish All</a></li>
                        <li><a class="dropdown-item" href="#">Publish Some</a></li>
                        <li><a class="dropdown-item" href="#">Publish One</a></li>
                    </ul>
                </div>

                <button class="btn btn-danger kanbas ms-1">
                    <FaPlus class="me-1 mb-1" />
                    Module</button>
                <button class="btn btn-light kanbas ms-1">
                    <FaEllipsisVertical />
                </button>
            </div>

            <hr />

            <div>
                <input className="d-block form-control mb-2"
                    value={module.name}
                    onChange={(e) =>
                        dispatch(setModule({ ...module, name: e.target.value }))}
                />
                <textarea className="d-block form-control mb-3"
                    value={module.description}
                    onChange={(e) =>
                        dispatch(setModule({ ...module, description: e.target.value }))}
                />
                <div className="d-flex">
                    <button className="btn btn-danger ms-auto me-2"
                        onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                        Add
                    </button>
                    <button className="btn btn-light kanbas"
                        onClick={() => dispatch(updateModule(module))}>
                        Update
                    </button>
                </div>
                <hr />

            </div>


            <div>
                {
                    modules
                        .filter((module) => module.course === courseId)
                        .map((module, index) => (
                            <ul className="list-group mt-5">
                                <li key={index} className="list-group-item list-group-item-secondary pt-3 pb-4 d-flex">
                                    <FaGripVertical className="me-2 mb-1 mt-3" />
                                    <p>{module.name} - {module.description}</p>
                                    <div class="d-flex flex-row ms-auto">
                                        <button
                                            className="btn"
                                            onClick={() => dispatch(deleteModule(module._id))}>
                                            <FaTrash size={15} className="text-danger" />
                                        </button>
                                        <button
                                            className="btn me-2"
                                            onClick={() => dispatch(setModule(module))}>
                                            <FaPen size={15} />
                                        </button>
                                        <FaCircleCheck size={20} className="pt-1 me-3 mt-2" style={{ "color": "#00db25" }} />
                                        <FaEllipsisVertical size={20} className="pt-1 mt-2" />
                                    </div>
                                </li>
                            </ul>
                        ))
                }
            </div>
        </div>
    );
}
export default ModuleList;