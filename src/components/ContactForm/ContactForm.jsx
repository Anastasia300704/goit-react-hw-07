import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
