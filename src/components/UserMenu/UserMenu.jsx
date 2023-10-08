import { useAuth } from 'components/UseAuth';
import { useDispatch } from 'react-redux';
import { userLogOut } from 'redux/auth/operetion';
import { Contaner, Title } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Contaner>
      <Title>Welcome, {user.name}</Title>
      <button type="button" onClick={() => dispatch(userLogOut())}>
        Logout
      </button>
    </Contaner>
  );
};
