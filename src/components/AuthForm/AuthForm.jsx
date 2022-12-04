import { Box, Button, TextField, useTheme } from '@mui/material';
import { AUTH_TYPES } from '../../constants';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, register } from '../../redux/auth/operations';

export const AuthForm = ({ type }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isRegister = type === AUTH_TYPES.REGISTER;

  const handleFormSubmit = event => {
    event.preventDefault();

    if (isRegister) {
      dispatch(register({ name, email, password }));
    } else {
      dispatch(login({ email, password }));
    }

    event.target.reset();
  };

  return (
    <Box
      component="form"
      noValidate
      py={4}
      mx="auto"
      display="flex"
      flexDirection="column"
      gap={2}
      maxWidth="350px"
      onSubmit={handleFormSubmit}
      autocomplete="off"
    >
      {isRegister && (
        <TextField
          type="text"
          label="Name"
          value={name}
          variant="outlined"
          color="secondary"
          size="small"
          inputProps={{ style: { color: theme.palette.secondary.main } }}
          onChange={event => {
            setName(event.target.value);
          }}
          autocomplete="off"
          focused={name !== ''}
        />
      )}
      <TextField
        type="email"
        label="E-mail"
        value={email}
        variant="outlined"
        color="secondary"
        size="small"
        inputProps={{ style: { color: theme.palette.secondary.main } }}
        onChange={event => {
          setEmail(event.target.value);
        }}
        autocomplete="off"
        focused={email !== ''}
      />
      <TextField
        type="password"
        label="Password"
        value={password}
        variant="outlined"
        color="secondary"
        size="small"
        inputProps={{ style: { color: theme.palette.secondary.main } }}
        onChange={event => {
          setPassword(event.target.value);
        }}
        autocomplete="new-password"
        focused={password !== ''}
      />
      <Button variant="outlined" type="submit" color="secondary">
        Submit
      </Button>
    </Box>
  );
};
