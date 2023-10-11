import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/operetion';
import { Loader } from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Layout } from './Layout';
import { useAuth } from './UseAuth';
import { GlobalStyle } from './GlobalStyle';

const HomePage = lazy(() => import('./page/Home/Home'));
const RegisterPage = lazy(() => import('./page/Registor/Registor'));
const LoginPage = lazy(() => import('./page/Login/Login'));
const ContactsPage = lazy(() => import('./page/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route
            path="register"
            element={
              <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          {/* <Route path="*" element={<HomePage />} /> */}
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
