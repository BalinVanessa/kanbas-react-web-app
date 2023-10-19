import db from "../../Database";
import { useParams } from "react-router-dom";
import { FaFileImport, FaFileExport, FaGear, FaFilter } from "react-icons/fa6";

function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div class="col modules">
            <div class="d-flex float-end">
                <button class="btn btn-light kanbas ms-1">
                    <FaFileImport class="me-1 mb-1"/>
                    Import
                </button>
                <div class="dropdown">
                    <button class="btn btn-light kanbas dropdown-toggle ms-1" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <FaFileExport class="me-1 mb-1"/>
                        Export</button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Export as Excel</a></li>
                        <li><a class="dropdown-item" href="#">Export as PDF</a></li>
                        <li><a class="dropdown-item" href="#">Export to Google Drive</a></li>
                    </ul>
                </div>
                <button class="btn btn-light kanbas ms-1">
                    <FaGear class="mb-1"/>
                </button>
            </div>
            <hr />
            <div class="row mb-3">
                <div class="col">
                    <h6><label for="searchStudents">Student Names</label></h6>
                    <input class="form-control" type="text" id="searchStudents" placeholder="Search Students" />
                </div>

                <div class="col">
                    <h6><label for="searchAssign">Assignment Names</label></h6>
                    <input class="form-control" type="text" id="searchAssign" placeholder="Search Assignments" />
                </div>
            </div>

            <button class="btn btn-light kanbas mb-3" type="button">
                <FaFilter class="me-1 mb-1"/>
                Apply Filters
            </button>


            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead>
                        <th>Student Name</th>
                        {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                        {enrollments.map((enrollment) => {
                            const user = db.users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td>{user.firstName} {user.lastName}</td>
                                    {assignments.map((assignment) => {
                                        const grade = db.grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td>{grade?.grade || ""}</td>);
                                    })}
                                </tr>);
                        })}
                    </tbody></table>
            </div></div>);
}
export default Grades;