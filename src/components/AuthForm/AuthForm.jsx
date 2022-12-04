import { Box, Button, TextField, useTheme } from '@mui/material';
import { AUTH_TYPES } from '../../constants';
import { useDispatch } from 'react-redux';
import { login, register } from '../../redux/auth/operations';

export const AuthForm = ({ type }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const isRegister = type === AUTH_TYPES.REGISTER;

  const handleFormSubmit = event => {
    event.preventDefault();

    const name = event.target?.name?.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

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
          name="name"
          variant="outlined"
          color="secondary"
          size="small"
          inputProps={{ style: { color: theme.palette.secondary.main } }}
          autocomplete="off"
          focused
        />
      )}
      <TextField
        type="email"
        label="E-mail"
        name="email"
        variant="outlined"
        color="secondary"
        size="small"
        inputProps={{ style: { color: theme.palette.secondary.main } }}
        autocomplete="off"
        focused
      />
      <TextField
        type="password"
        label="Password"
        name="password"
        variant="outlined"
        color="secondary"
        size="small"
        inputProps={{ style: { color: theme.palette.secondary.main } }}
        autocomplete="new-password"
        focused
      />
      <Button variant="outlined" type="submit" color="secondary">
        Submit
      </Button>
    </Box>
  );
};
