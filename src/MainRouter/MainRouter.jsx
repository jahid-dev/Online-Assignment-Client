import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

import ErrorElement from "../Components/ErrorElement/ErrorElement";
import Assignments from "../Pages/Assignments/Assignments";

import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import SubmittedAssignments from "../Pages/SubmittedAssignments/SubmittedAssignments";
import ViewSingleAssignment from "../Pages/Assignments/ViewSingleAssignment";
import UpdateAssignment from "../Pages/Assignments/UpdateAssignment";
import MyCompletedAssignment from "../components/MyCompletedAssignment/MyCompletedAssignment";

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
        path: '/mycompleteassignments',
        element: <MyCompletedAssignment></MyCompletedAssignment>,
        loader: () => fetch('http://localhost:5000/api/v1/takenewassignments')
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/assignments",
        element: <Assignments></Assignments>,
      },
      
      {
        path: "/createassignment",
        element: <CreateAssignment></CreateAssignment>,
      },
      {
        path: "/submittedassignments",
        element: <SubmittedAssignments></SubmittedAssignments>,
        loader: () =>  fetch("http://localhost:5000/api/v1/takenewassignments")
      },
      {
        path: "viewassignment/:id",
        element: <ViewSingleAssignment></ViewSingleAssignment>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/allassignments/${params.id}`),

        // loader: ({ params }) => fetch(`http://localhost:5000/api/v1/allassignments/6548cd7cf18ec92432945536`)
      },
      {
        path: "updateassignment/:id",
        element: <UpdateAssignment></UpdateAssignment>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/allassignments/${params.id}`),
      },
    ],
  },
]);

export default router;
