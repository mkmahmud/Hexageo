import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from '../Layouts/Main';



const Routes = () => { 

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
};

export default Routes;