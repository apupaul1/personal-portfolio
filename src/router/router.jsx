import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../Pages/HomePage/Home/HomePage";
import ProjectDetails from "../Pages/HomePage/ProjectSection/ProjectDetails";
import Contact from "../Pages/HomePage/Contact/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path:'/project/:id',
                Component: ProjectDetails
            },
        ]
    }
])