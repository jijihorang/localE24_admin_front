import BasicLayout from "../../layouts/MainLayout.tsx";
import {Outlet} from "react-router-dom";

function ApplyManagementsIndex() {
    return (
        <BasicLayout>
            <div>
                <Outlet></Outlet>
            </div>
        </BasicLayout>
    );
}

export default ApplyManagementsIndex;