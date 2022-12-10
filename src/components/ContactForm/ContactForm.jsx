import { Box, Button, TextField, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import { useState } from 'react';

export const ContactForm = () => {
  const [nameError, setNameError] = useState(false);
  const [numberError, setNumberError] = useState(false);

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const theme = useTheme();

  const isExistContact = name => {
    return contacts.some(item => item.name === name);
  };

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

  const handleNumberChange = event => {
    const number = event.target;
    validateInput(number, setNumberError);
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    const name = event.target.elements.name;
    const number = event.target.elements.number;

    const isValidName = validateInput(name, setNameError);
    const isValidNumber = validateInput(number, setNumberError);

    if (!isValidName || !isValidNumber) {
      return;
    }

    if (isExistContact(name.value)) {
      alert(`${name.value} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name: name.value, number: number.value }));

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
      autoComplete="off"
    >
      <TextField
        type="text"
        label="Name"
        name="name"
        variant="outlined"
        color="secondary"
        size="small"
        inputProps={{
          style: { color: theme.palette.secondary.main },
          pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
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
      <TextField
        type="text"
        label="Phone"
        name="number"
        variant="outlined"
        color="secondary"
        size="small"
        inputProps={{
          style: { color: theme.palette.secondary.main },
          pattern: '^([+]?[s0-9]+)?(d{3}|[(]?[0-9]+[)])?([-]?[s]?[0-9])+$',
        }}
        autoComplete="off"
        focused
        onChange={handleNumberChange}
        error={numberError}
        {...(numberError && {
          helperText:
            'Phone number must be digits and can contain spaces, dashes, parentheses and can start with',
        })}
      />
      <Button variant="outlined" type="submit" color="secondary">
        Add contact
      </Button>
    </Box>
  );
};
