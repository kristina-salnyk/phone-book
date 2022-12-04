import { AppBar, Box, Container, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Logo } from './Logo/Logo';
import { NavLink } from './NavLink/NavLink';
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/auth/operations';

export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  return (
    <>
      <AppBar color="secondary" position="sticky">
        <Container maxWidth="md">
          <Toolbar component="nav">
            <Logo />
            <Box ml="auto" display="flex" gap="20px">
              {isLoggedIn ? (
                <NavLink
                  title="Logout"
                  onClick={() => {
                    dispatch(logout());
                  }}
                />
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
            <Outlet />
          </Container>
        </Box>
      </Box>
    </>
  );
};
