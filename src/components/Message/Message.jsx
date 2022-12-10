import error from 'img/error.png';
import noResults from 'img/no-results.png';
import { Box, Typography } from '@mui/material';
import Image from 'mui-image';
import PropTypes from 'prop-types';

const messageDescription = {
  error: {
    text: 'Something went wrong. Try again later',
    image: error,
  },
  noResults: {
    text: 'No contacts found',
    image: noResults,
  },
};

export const Message = ({ type }) => {
  const message = messageDescription[type];

  return (
    <Box display="flex" alignItems="center" flexDirection="column" p="16px">
      <Typography
        variant="h5"
        component="h2"
        color="secondary"
        fontWeight="fontWeightBold"
        textAlign="center"
      >
        {message.text}
      </Typography>
      <Image
        src={message.image}
        alt={message.text}
        sx={{ maxWidth: '200px' }}
      />
    </Box>
  );
};

Message.propTypes = {
  type: PropTypes.string.isRequired,
};
