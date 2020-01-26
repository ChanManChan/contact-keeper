// basically, we want to be able to inside of our App.js, whenever we want a route that requires you to be logged in, we just want to be able to do the below
// instead of <Route... to <PrivateRoute....
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

//This is standard way to create a private route component in React
// Below is very common for creating a private route component
const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;
  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated && !loading ? (
          <Redirect to='/login' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
