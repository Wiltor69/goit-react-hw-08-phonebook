import { useAuth } from 'components/UseAuth';
import { Link } from './Navigation.styled';
// import { Suspense } from 'react';
// import { Loader } from 'components/Loader/Loader';
// import { Outlet } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </>
  );
};
