import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20%;
  font-family: sans-serif;
  font-weight: bold;
  color: #fff;
  ${
    '' /* @media screen and (max-width: 768px) {
    margin-top: 20rem;
  } */
  }
`;

export const Text = styled.p`
  font-size: 35px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Button = styled.a`
  display: block;
  width: 6rem;
  justify-content: center;
  text-align: center;
  margin: auto;
  text-decoration: none;
  padding: 15px;
  border: none;
  background-color: #809778;
  cursor: pointer;
  border-radius: 5px;
  color: #fff;
  &:hover {
    background-color: #788097;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
