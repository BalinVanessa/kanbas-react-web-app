import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaPlus, FaGripVertical, FaCircleCheck, FaEllipsisVertical } from "react-icons/fa6";

function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
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
                    <FaPlus class="me-1 mb-1"/>
                    Module</button>
                <button class="btn btn-light kanbas ms-1">
                    <FaEllipsisVertical />
                </button>
            </div>

            <hr />

            <div>
                {
                    modules
                        .filter((module) => module.course === courseId)
                        .map((module, index) => (
                            <ul className="list-group mt-5">
                                <li key={index} className="list-group-item list-group-item-secondary pt-3 pb-3">
                                    <FaGripVertical className="me-1 mb-1" />
                                    {module.name} - {module.description}
                                    <div class="d-flex flex-row float-end">
                                        <FaCircleCheck size={20} className="pt-1 me-3" style={{ "color": "#00db25" }} />
                                        <FaEllipsisVertical size={20} className="pt-1" />
                                    </div>
                                </li>
                            </ul>

                        ))
                }
            </div >
        </div>
    );
}
export default ModuleList;