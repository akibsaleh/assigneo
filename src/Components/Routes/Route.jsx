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
import SubmittedAssignments from '../SubmittedAssignments/SubmittedAssignments';
import SingleSubmission from '../SingleSubmission/SingleSubmission';
import Error from '../Error/Error';
import PrivateRoute from './PrivateRoute';

export const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
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
        element: (
          <PrivateRoute>
            <SubmittedAssignments />
          </PrivateRoute>
        ),
      },
      {
        path: '/create-assignment',
        element: (
          <PrivateRoute>
            <CreateAssignments />
          </PrivateRoute>
        ),
      },
      {
        path: '/my-assignments',
        element: (
          <PrivateRoute>
            <MyAssignments />
          </PrivateRoute>
        ),
      },
      {
        path: '/assignment/:id',
        element: (
          <PrivateRoute>
            <SingleAssignment />
          </PrivateRoute>
        ),
      },
      {
        path: '/submission/:id',
        element: (
          <PrivateRoute>
            <SingleSubmission />
          </PrivateRoute>
        ),
      },
      {
        path: '/update/:id',
        element: (
          <PrivateRoute>
            <UpdateAssignment />
          </PrivateRoute>
        ),
      },
      {
        path: '/assignment/',
        element: (
          <PrivateRoute>
            <SingleAssignment />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
