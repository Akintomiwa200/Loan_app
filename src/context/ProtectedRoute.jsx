import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import PropTypes from 'prop-types'; // Import PropTypes

const ProtectedRoute = ({ children }) => {
  const { userData, loading } = useContext(UserContext);

  // Show loading state while authentication is being determined
  if (loading) return <div>Loading...</div>;

  // If user is authenticated, render the component, otherwise redirect to login
  return userData ? children : <Navigate to="/login" />;
};

// PropTypes validation for the children prop
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
