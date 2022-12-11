import { Box, Typography } from '@mui/material';
import { AuthForm } from '../components/AuthForm/AuthForm';
import { AUTH_TYPES } from '../constants';

const Login = () => {
  return (
    <Box bgcolor="primary.light" borderRadius={5} p={4}>
      <Typography
        variant="h4"
        component="h1"
        color="secondary"
        fontWeight="fontWeightBold"
        textAlign="center"
      >
        Login
      </Typography>
      <AuthForm type={AUTH_TYPES.LOGIN} />
    </Box>
  );
};

export default Login;
