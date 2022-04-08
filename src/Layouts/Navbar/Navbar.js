import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Link, Button } from './NavbarStyles';
import useAuth from '../../services/useAuth';

const Navbar = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <Container>
      <Link href='/'>My OpenSky Project</Link>
      {auth && <Button onClick={Logout}>Logout</Button>}
    </Container>
  );
};

export default Navbar;
