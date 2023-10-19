import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";


function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);


    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div class="col modules">
            <label for="assignment-name" class="form-label">Assignment Name</label>
            <input value={assignment.title}
                className="form-control mb-2"
                id="assignment-name" />
            <hr />
            <div class="d-flex">
                <div class="form-check">
                    <input type="checkbox" value="NOTIFY" name="check-count" id="notifyUsers"
                        class="form-check-input" />
                    <label for="notifyUsers" class="form-check-label">Notify users that this content has
                        changed</label>
                </div>

                <div class="ms-auto d-inline">
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                        className="btn btn-light kanbas me-1">
                        Cancel
                    </Link>
                    <button onClick={handleSave} className="btn btn-danger">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}


export default AssignmentEditor;