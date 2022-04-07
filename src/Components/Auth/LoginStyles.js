import styled from 'styled-components';

export const FormContainer = styled.div`
  margin-top: 15%;
  font-family: sans-serif;
  font-weight: bold;
  color: #fff;
  display: flex;
  flex-direction: column;
  background: #977880;
  width: 40%;
  padding-top: 50px;
  padding-bottom: 50px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    width: 90%;
    margin-top: 45%;
  }

  @media (max-width: 658px) {
    width: 100%;
    margin-top: 50%;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const Box = styled.div`
  padding-bottom: 15px;
  input {
    width: 80%;
    padding: 15px;
    border-radius: 10px;
    border: none;
    &:focus {
        outline: none;
    }

    @media (max-width: 768px) {
      width: 70%;
    }

    @media (max-width: 658px) {
      width: 80%;
    }
  }
`;

export const Button = styled.button`
  font-size: 16px;
  font-weight: bold;
  padding: 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: #809778;
  width: 30%;
  color: #fff;
  &:hover {
    background-color: #788097;
  }
  @media (max-width: 768px) {
    width: 50%;
  }
`;
