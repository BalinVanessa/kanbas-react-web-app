import { Link, useLocation } from "react-router-dom";
import { FaCircleQuestion, FaCircleUser, FaClock, FaDisplay, FaEnvelope, FaRightFromBracket } from 'react-icons/fa6';
import { FaGaugeHigh } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const icons = [FaCircleUser, FaGaugeHigh, FaBook, FaCalendarDays, FaEnvelope, FaClock, FaDisplay, FaRightFromBracket, FaCircleQuestion];
    const { pathname } = useLocation();
    return (
        <div class="sidebar text-white bg-dark d-none d-md-block">
            <img class="nulogo" src="images/NU_RGB_Notched-N_motto_RW.png"></img>
            <div className="list-group fullwidth">
                {links.map((link, index) => {
                    const Icon = icons[index];
                    return (
                        <Link
                            key={index}
                            to={`/Kanbas/${link}`}
                            className={`list-group-item navlink ${pathname.includes(link) ? "active overridebg" : "bg-dark"}`}>
                            <div class="centered">
                                <Icon className={link === "Account" ? 'navicon grey-icon' : 'navicon'} />
                                <p class="navtext">{link}</p>
                            </div>
                        </Link>)
                })}
            </div>
        </div>
    );
}
export default KanbasNavigation;