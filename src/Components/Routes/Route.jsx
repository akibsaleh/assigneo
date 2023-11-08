import { createBrowserRouter } from 'react-router-dom';
import Layout from '../../Layout';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import AllAssignments from '../AllAssignments/AllAssignments';
import MyAssignments from '../MyAssignments/MyAssignments';
import UpdateAssignment from '../UpdateAssignment/UpdateAssignment';
import SingleAssignment from '../SingleAssignment/SingleAssignment';
import CreateAssignments from '../CreateAssignments/CreateAssignments';
import axios from 'axios';
import SubmittedAssignments from '../SubmittedAssignments/SubmittedAssignments';

export const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/all-assignments',
        element: <AllAssignments />,
      },
      {
        path: '/submitted-assignments',
        element: <SubmittedAssignments />,
      },
      {
        path: '/create-assignment',
        element: <CreateAssignments />,
      },
      {
        path: '/my-assignments',
        element: <MyAssignments />,
      },
      {
        path: '/assignment/:id',
        element: <SingleAssignment />,
      },
      {
        path: '/update/:id',
        element: <UpdateAssignment />,
        loader: ({ params }) => axios.get(`/update/${params.id}`).data,
      },
      {
        path: '/assignment/',
        element: <SingleAssignment />,
      },
    ],
  },
]);
