import { useDispatch } from 'react-redux';
import { Person } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { deleteContact } from '../../redux/contacts/operations';
import PropTypes from 'prop-types';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <Box display="flex" alignItems="center" color="secondary" width="100%">
      <Person sx={{ fontSize: 30, marginRight: 1 }} color="secondary" />
      <Typography color="secondary"> {`${name}: ${number}`} </Typography>
      <Button
        variant="outlined"
        color="secondary"
        size="large"
        sx={{ marginLeft: 'auto' }}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </Button>
    </Box>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
