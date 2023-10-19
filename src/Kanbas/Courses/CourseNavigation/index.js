import { Link, useParams, useLocation } from "react-router-dom";


function CourseNavigation() {
    const links = ["Home", "Modules", "Assignments", "Grades"];
    const { courseId } = useParams();
    const { pathname } = useLocation();
    return (
        <div className="list-group">
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/Courses/${courseId}/${link}`}
                    className={`list-group-item acc-link ${pathname.includes(link) && "active"}`}>
                    {link}
                </Link>
            ))}
        </div>

    );
}


export default CourseNavigation;