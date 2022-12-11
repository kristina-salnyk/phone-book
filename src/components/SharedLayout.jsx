import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Logo } from './Logo/Logo';
import { NavLink } from './NavLink/NavLink';
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/auth/operations';
import { AccountCircle } from '@mui/icons-material';
import { Loader } from './Loader/Loader';
import { Suspense } from 'react';

export const SharedLayout = () => {
  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();

  return (
    <>
      <AppBar color="secondary" position="sticky">
        <Container maxWidth="md">
          <Toolbar component="nav">
            <Logo />
            <Box ml="auto" display="flex" gap="20px">
              {isLoggedIn ? (
                <>
                  <NavLink path="contacts" title="Contacts" />
                  <NavLink
                    title="Logout"
                    onClick={() => {
                      dispatch(logout());
                    }}
                  />
                  <Box display="flex" gap="10px" alignItems="center">
                    <AccountCircle sx={{ fontSize: 35 }} />
                    <Box display="flex" flexDirection="column">
                      <Typography variant="" component="span">
                        {user.name}
                      </Typography>
                      <Typography variant="subtitle2" component="span">
                        {user.email}
                      </Typography>
                    </Box>
                  </Box>
                </>
              ) : (
                <>
                  <NavLink path="login" title="Login" />
                  <NavLink path="registration" title="Registration" />
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="main">
        <Box
          component="section"
          bgcolor="primary.main"
          height="calc(100vh - 64px)"
          pt={4}
        >
          <Container maxWidth="md">
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>
        </Box>
      </Box>
    </>
  );
};
