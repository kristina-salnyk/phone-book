import React from 'react';
import { NavLink as Link, useLocation } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

export const NavLink = ({
  path,
  title,
  titleStyleProps,
  onClick,
  children,
}) => {
  const location = useLocation();

  return (
    <Button
      component={Link}
      to={path}
      style={{ textTransform: 'none' }}
      color="secondary"
      onClick={onClick}
    >
      {children}
      <Typography
        variant="navLink"
        component="span"
        color={
          `/${path}` === location.pathname ? 'primary.dark' : 'secondary.dark'
        }
        {...titleStyleProps}
      >
        {title}
      </Typography>
    </Button>
  );
};
