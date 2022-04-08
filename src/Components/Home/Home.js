import React from 'react';
import { Container, Text, Button } from './HomeStyles';
import useAuth from '../../services/useAuth';

const Home = () => {
  const auth = useAuth();

  return (
    <Container>
      <Text>Get Information on all flights around the world</Text>
      <Button href={auth ? '/dashboard' : '/login'}>
        {auth ? 'Dashboard' : 'Login'}
      </Button>
    </Container>
  );
};

export default Home;
