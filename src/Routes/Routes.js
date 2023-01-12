import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";



const Routes = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <div>Hello Routes</div>,
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
};

export default Routes;