import { createBrowserRouter } from 'react-router-dom';
import Layout from '../../Layout';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import AllAssignments from '../AllAssignments/AllAssignments';
import MyAssignments from '../MyAssignments/MyAssignments';
import UpdateAssignment from '../UpdateAssignment/UpdateAssignment';
import SingleAssignment from '../SingleAssignment/SingleAssignment';

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
        path: '/my-assignments',
        element: <MyAssignments />,
      },
      {
        path: '/update-assignment/:id',
        element: <UpdateAssignment />,
      },
      {
        path: '/assignment/',
        element: <SingleAssignment />,
      },
    ],
  },
]);
