import { FaCircle, FaCalendar } from "react-icons/fa6";

function Status() {
    return (
        <div class="course-buttons col-2 d-none d-xl-block ps-4">
            <h6>Course Status</h6>
            <div class="d-flex w-100 mb-3">
                <button type="button" class="btn btn-light kanbas w-50">Unpublish</button>
                <button type="button" class="btn btn-success w-50">Published</button>
            </div>
            <button type="button" class="btn btn-light kanbas w-100">Import Existing Content</button>
            <button type="button" class="btn btn-light kanbas w-100">Import From Commons</button>
            <button type="button" class="btn btn-light kanbas w-100">Choose Home Page</button>
            <button type="button" class="btn btn-light kanbas w-100">View Course Stream</button>
            <button type="button" class="btn btn-light kanbas w-100">New Announcement</button>
            <button type="button" class="btn btn-light kanbas w-100">New Analytics</button>
            <button type="button" class="btn btn-light kanbas w-100 mb-4">View Course Notifications</button>

            <h6>To Do</h6>
            <hr class="mt-0" />
            <div class="d-flex w-100 mb-3">
                <FaCircle class="text-danger me-2 pt-1" />
                <a href="#">
                    <h6 class="text-danger">Grade A1 - ENV + HTML</h6>
                    <p class="text-secondary">100 points - Sep 18 at 11:59pm</p>
                </a>
            </div>

            <div class="d-flex justify-content-around">
                <h6>Coming Up</h6>
                <a href="#" class="d-inline-flex">
                    <FaCalendar class="fa-regular fa-calendar text-secondary mt-2 me-2" />
                    <p class="text-danger">View Calendar</p>
                </a>
            </div>

            <hr class="mt-0" />
            <div class="d-flex w-100">
                <FaCalendar class="fa-regular fa-calendar text-secondary me-2 pt-1"/>
                <a href="#">
                    <h6 class="text-danger">Lecture</h6>
                    <p class="text-secondary">CS4550.12631.202410<br /> Sep 7 at 11:45am</p>
                </a>
            </div>

            <div class="d-flex w-100">
                <FaCalendar class="fa-regular fa-calendar text-secondary me-2 pt-1"/>
                <a href="#">
                    <h6 class="text-danger">Lecture</h6>
                    <p class="text-secondary">CS4550.12631.202410 <br />Sep 11 at 11:45am</p>
                </a>
            </div>

            <div class="d-flex w-100">
                <FaCalendar class="fa-regular fa-calendar text-secondary me-2 pt-1"/>
                <a href="#">
                    <h6 class="text-danger">CS5610 06 Sp23 Lecture</h6>
                    <p class="text-secondary">CS4550.12631.202410 <br />Sep 11 at 6pm</p>
                </a>
            </div>

        </div>
    );
}
export default Status;