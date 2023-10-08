import { Button, List, ListItem } from './ListContact.styled';
import { useSelector, useDispatch } from 'react-redux';
import { myContacts, myFilters } from 'redux/selector';
import { deleteContact } from 'redux/operation';

export const ListContact = () => {
  const contacts = useSelector(myContacts);
  const filters = useSelector(myFilters);

  const dispatch = useDispatch();

  const filtred = contacts.filter(item =>
    item.name.toLowerCase().includes(filters)
  );

  return (
    <List>
      {filtred.map(item => {
        return (
          <ListItem key={item.id}>
            <p>
              {item.name}: {item.number}
            </p>
            <Button onClick={() => dispatch(deleteContact(item.id))}>
              Delete
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
};
