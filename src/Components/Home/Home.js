import React from 'react';
import { Container, Text, Button } from './HomeStyles';

const Home = () => {
  return (
    <Container>
      <Text>Get Information on all flights around the world</Text>
      <Button href="/login">LOGIN</Button>
    </Container>
  );
};

export default Home;
