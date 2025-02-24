import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts, selectLoading, selectError } from '../../redux/contactsSlice';
import { deleteContact } from '../../redux/contactsOps';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.phone}
          <button onClick={() => handleDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
