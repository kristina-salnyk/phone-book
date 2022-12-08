import { Box, Button, TextField, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const theme = useTheme();

  const isExistContact = name => {
    return contacts.some(item => item.name === name);
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    const name = event.target.name.value;
    const number = event.target.number.value;

    if (isExistContact(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    // dispatch(addContact({ name, number }));

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
      <TextField
        type="text"
        label="Phone"
        name="phone"
        variant="outlined"
        color="secondary"
        size="small"
        inputProps={{ style: { color: theme.palette.secondary.main } }}
        autocomplete="off"
        focused
      />
      <Button variant="outlined" type="submit" color="secondary">
        Add contact
      </Button>
    </Box>
  );
};
