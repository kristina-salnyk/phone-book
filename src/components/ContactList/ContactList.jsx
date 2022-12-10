import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import { List, ListItem } from '@mui/material';
import { Contact } from '../Contact/Contact';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 450,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        marginX: 'auto',
      }}
    >
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id} sx={{ border: '1px solid white', borderRadius: 2 }}>
          <Contact id={id} name={name} number={number} />
        </ListItem>
      ))}
    </List>
  );
};
