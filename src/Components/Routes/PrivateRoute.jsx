import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import DoorDashFavorite from '../CustomLoader/DoorDashFavorite';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="container max-w-screen-xl mx-auto flex flex-col grow">
        <DoorDashFavorite />
      </div>
    );
  }

  if (user?.email) return children;

  return (
    <Navigate
      to="/login"
      state={{ from: location }}
    />
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
