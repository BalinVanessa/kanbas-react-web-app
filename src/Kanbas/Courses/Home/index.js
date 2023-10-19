import Modules from "../Modules";
import ModuleList from "../Modules/ModuleList";
import Status from "./Status";


function Home() {
    return (
        <div class="profile">
            <ModuleList/>
            <Status/>
        </div>
    );
}
export default Home;