import { SharedLayout } from './SharedLayout';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Registration } from '../pages/Registration';
import { Contacts } from '../pages/Contacts';
import { Home } from '../pages/Home';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { useEffect } from 'react';
import { current } from '../redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing ? (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route
              path="registration"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Registration />}
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
          </Route>
        </Routes>
      ) : null}
    </>
  );
};
