import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

import ErrorElement from "../Components/ErrorElement/ErrorElement";
import Assignments from "../Pages/Assignments/Assignments";
import MyAssignment from "../Pages/MyAssignment/MyAssignment";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import SubmittedAssignments from "../Pages/SubmittedAssignments/SubmittedAssignments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path:'/assignments',
        element: <Assignments></Assignments>,
      },
      {
        path:'/myassignment',
        element: <MyAssignment></MyAssignment>
      },
      {
        path:'/createassignment',
        element: <CreateAssignment></CreateAssignment>
      },
      {
        path:'/submittedassignments',
        element:<SubmittedAssignments></SubmittedAssignments>
      },
    ],
  },
]);

export default router;
