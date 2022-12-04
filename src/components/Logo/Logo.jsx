import { Box } from '@mui/material';
import { NavLink } from '../NavLink/NavLink';
import logo from '../../img/logo.png';

export const Logo = () => {
  return (
    <NavLink
      path="/"
      title="Phone Book"
      titleStyleProps={{
        sx: {
          ml: 1,
          fontFamily: 'Pacifico',
        },
      }}
    >
      <Box display="flex" alignItems="center">
        <img src={logo} alt="Phone book logo" width={40} height={40} />
      </Box>
    </NavLink>
  );
};
