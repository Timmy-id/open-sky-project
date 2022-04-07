import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContainer, Box, Button } from './LoginStyles';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('Username', username);
    navigate('/dashboard');
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Box>
          <input
            type='text'
            value={username}
            placeholder='Enter Username'
            onChange={(e) => setUsername(e.target.value)}
          />
        </Box>
        <Box>
          <input
            type='password'
            value={password}
            placeholder='Enter Password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Button type='submit'>LOGIN</Button>
      </form>
    </FormContainer>
  );
};

export default Login;
