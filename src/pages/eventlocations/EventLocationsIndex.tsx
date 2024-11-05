import BasicLayout from "../../layouts/MainLayout.tsx";
import {Outlet} from "react-router-dom";

function EventLocationsIndex() {
    return (
        <BasicLayout>
            <div>
                <Outlet></Outlet>
            </div>
        </BasicLayout>
    );
}

export default EventLocationsIndex;