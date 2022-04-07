import styled from 'styled-components';

export const MContainer = styled.div`
  margin-top: 20%;
  font-family: sans-serif;
  font-weight: bold;
  color: #fff;
`;

export const Text = styled.p`
  font-size: 35px;
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
`;
