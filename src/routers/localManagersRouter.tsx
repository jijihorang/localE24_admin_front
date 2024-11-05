import {lazy, Suspense} from "react";
import {Navigate} from "react-router-dom";
import LoadingPage from "../pages/LoadingPage.tsx";

const Loading = <LoadingPage></LoadingPage>

const LocalManagerListPage = lazy(() => import("../pages/localmanagers/LocalManagerListPage.tsx"))
const LocalManagerRegisterPage = lazy(() => import("../pages/localmanagers/LocalManagerRegisterPage.tsx"))
const LocalManagersIndex = lazy(() => import("../pages/localmanagers/LocalManagersIndex.tsx"))

const localManagersRouter = {
    path: "/localManagers",
    element: <Suspense fallback={Loading}><LocalManagersIndex/></Suspense>,
    children: [
        {
            path: "",
            element: <Navigate to="list" replace={true}/>
        },
        {
            path: "list",
            element: <Suspense fallback={Loading}><LocalManagerListPage/></Suspense>
        },
        {
            path: "register",
            element: <Suspense fallback={Loading}><LocalManagerRegisterPage/></Suspense>
        }
    ]
}

export default localManagersRouter;