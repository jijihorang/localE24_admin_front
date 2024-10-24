import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import adminMainRouter from "./routers/adminMainRouter.tsx";

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={adminMainRouter}></RouterProvider>
)
