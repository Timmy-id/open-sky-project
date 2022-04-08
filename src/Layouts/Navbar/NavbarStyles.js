import styled from 'styled-components';

export const Container = styled.div`
  background: #788097;
  position: fixed;
  top: 0;
  width: 100%;
  color: #fff;
  padding: 20px;
  }
`;

export const Link = styled.a`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: #fff;
  text-decoration: none;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 25px;
  }
  @media (max-width: 375px) {
    font-size: 16px;
  }
`;

export const Button = styled.a`
  display: block;
  width: 6rem;
  justify-content: center;
  text-align: center;
  margin: auto;
  text-decoration: none;
  padding: 10px;
  border: none;
  background-color: '#977880';
  cursor: pointer;
  border-radius: 5px;
  color: #fff;
  &:hover {
    background-color: #788097;
  }
`;