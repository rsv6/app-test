import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
  } from "react-router";
import RootLayout from "../components/layout/RootLayout";
import Home from "../pages/Home";
import About from "../pages/About";
  
const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        //loader: loadRootData,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: "*",
                element: <Navigate to="/" replace />
            }
        ]
    },
]);


export const AppRouter = () => <RouterProvider router={router} />