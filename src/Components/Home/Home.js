import React from 'react';
import { MContainer, Text, Button } from './HomeStyles';

const Home = () => {
  return (
    <MContainer>
      <Text>Get Information on all flights around the world</Text>
      <Button href="/login">LOGIN</Button>
    </MContainer>
  );
};

export default Home;
