import { Box, Typography } from '@mui/material';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from '../redux/contacts/selectors';
import { useEffect } from 'react';
import { getContacts } from '../redux/contacts/operations';
import getMessageType from '../utils/getMessageType';
import { Loader } from '../components/Loader/Loader';
import { Message } from '../components/Message/Message';

export const Contacts = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const params = {
    hasError: error,
    hasResults: contacts.length > 0,
  };
  const messageType = getMessageType(params);

  return (
    <Box bgcolor="primary.light" borderRadius={5} p={4}>
      <Typography
        variant="h4"
        component="h1"
        color="secondary"
        fontWeight="fontWeightBold"
        textAlign="center"
      >
        Phonebook
      </Typography>

      <ContactForm />

      <Typography
        variant="h4"
        component="h2"
        color="secondary"
        fontWeight="fontWeightBold"
        textAlign="center"
      >
        Contacts
      </Typography>

      {contacts.length > 0 && <ContactList />}

      {isLoading && contacts.length === 0 && <Loader />}

      {!isLoading && messageType && <Message type={messageType} />}
    </Box>
  );
};
