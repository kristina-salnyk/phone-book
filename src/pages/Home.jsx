import { Box, Button, Typography } from '@mui/material';
import img from '../img/phone-book.png';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <Box
      bgcolor="primary.light"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderRadius={5}
    >
      <Box flex={6} px={5} py={16}>
        <Typography
          variant="h2"
          component="h1"
          color="secondary"
          fontWeight="fontWeightBold"
          mb={4}
        >
          Create your own phone book
        </Typography>
        <Button
          component={NavLink}
          to="registration"
          variant="outlined"
          color="secondary"
          size="large"
        >
          Get started
        </Button>
      </Box>
      <Box flex={4} alignSelf="end">
        <img
          src={img}
          alt="Man with phone"
          width="100%"
          height="auto"
          style={{ display: 'block' }}
        />
      </Box>
    </Box>
  );
};

export default Home;
