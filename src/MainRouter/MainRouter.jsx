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
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
        element:<Login></Login>,
      },
      {
        path: '/mycompleteassignments',
        element: <MyCompletedAssignment></MyCompletedAssignment>,
        loader: () => fetch('https://online-assignment-server.vercel.app/api/v1/takenewassignments')
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
        element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>,
      },
      {
        path: "/submittedassignments",
        element:<PrivateRoute><SubmittedAssignments></SubmittedAssignments></PrivateRoute> ,
        loader: () =>  fetch("https://online-assignment-server.vercel.app/api/v1/takenewassignments")
      },
      {
        path: "viewassignment/:id",
        element: <PrivateRoute><ViewSingleAssignment></ViewSingleAssignment></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://online-assignment-server.vercel.app/api/v1/allassignments/${params.id}`),

        // loader: ({ params }) => fetch(`https://online-assignment-server.vercel.app/api/v1/allassignments/6548cd7cf18ec92432945536`)
      },
      {
        path: "updateassignment/:id",
        element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://online-assignment-server.vercel.app/api/v1/allassignments/${params.id}`),
      },
    ],
  },
]);

export default router;
