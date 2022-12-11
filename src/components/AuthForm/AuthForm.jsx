import { Box, Button, TextField, Typography, useTheme } from '@mui/material';
import { AUTH_TYPES } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { login, register } from '../../redux/auth/operations';
import { useEffect, useState } from 'react';
import { selectError } from '../../redux/auth/selectors';
import { resetError } from '../../redux/auth/slice';

export const AuthForm = ({ type }) => {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const error = useSelector(selectError);

  const dispatch = useDispatch();
  const theme = useTheme();

  const isRegister = type === AUTH_TYPES.REGISTER;

  useEffect(() => {
    return () => {
      dispatch(resetError());
    };
  }, [dispatch]);

  const validateInput = (element, onValidate) => {
    if (element.value.match(element.pattern)) {
      onValidate(false);
      return true;
    }
    onValidate(true);
    return false;
  };

  const handleNameChange = event => {
    const name = event.target;
    validateInput(name, setNameError);
  };

  const handleEmailChange = event => {
    const email = event.target;
    validateInput(email, setEmailError);
  };

  const handlePasswordChange = event => {
    const password = event.target;
    validateInput(password, setPasswordError);
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    dispatch(resetError());

    const name = event.target?.name;
    const email = event.target.email;
    const password = event.target.password;

    const isValidName = isRegister ? validateInput(name, setNameError) : true;
    const isValidEmail = validateInput(email, setEmailError);
    const isValidPassword = validateInput(password, setPasswordError);

    if (!isValidName || !isValidEmail || !isValidPassword) {
      return;
    }

    if (isRegister) {
      dispatch(
        register({
          name: name.value,
          email: email.value,
          password: password.value,
        })
      );
    } else {
      dispatch(login({ email: email.value, password: password.value }));
    }
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
      autoComplete="off"
    >
      {isRegister && (
        <TextField
          type="text"
          label="Name"
          name="name"
          variant="outlined"
          color="secondary"
          size="small"
          inputProps={{
            style: { color: theme.palette.secondary.main },
            pattern:
              "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
          }}
          autoComplete="off"
          focused
          onChange={handleNameChange}
          error={nameError}
          {...(nameError && {
            helperText:
              "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
          })}
        />
      )}
      <TextField
        type="email"
        label="E-mail"
        name="email"
        variant="outlined"
        color="secondary"
        size="small"
        inputProps={{
          style: { color: theme.palette.secondary.main },
          pattern: '^([0-9a-zA-Zd_.-])+@(([a-zA-Zd-])+.)+([a-zA-Zd]{2,4})+$',
        }}
        autoComplete="off"
        focused
        onChange={handleEmailChange}
        error={emailError}
        {...(emailError && {
          helperText:
            'Email must contain only latin letters, numbers, @ and dots',
        })}
      />
      <TextField
        type="password"
        label="Password"
        name="password"
        variant="outlined"
        color="secondary"
        size="small"
        inputProps={{
          style: { color: theme.palette.secondary.main },
          pattern: '^.{4,8}$',
        }}
        autoComplete="new-password"
        focused
        onChange={handlePasswordChange}
        error={passwordError}
        {...(passwordError && {
          helperText: 'Password must contain from 4 to 8 characters',
        })}
      />
      <Button variant="outlined" type="submit" color="secondary">
        Submit
      </Button>

      {error && (
        <Typography color="error">
          {`${error}. Check your credentials`}
        </Typography>
      )}
    </Box>
  );
};
