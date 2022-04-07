import React from 'react';
import { Container, Link } from './FooterStyles';

const Footer = () => {
  return (
    <Container>
      <Link href='/'>My OpenSky Project</Link>
      <p>Built with &#10084; by Oluwatimilehin Idowu</p>
    </Container>
  );
};

export default Footer;
