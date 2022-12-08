import { Box, Typography } from '@mui/material';
import { ContactForm } from '../components/ContactForm/ContactForm';

export const Contacts = () => {
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
    </Box>
  );
};
