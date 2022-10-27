import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
// const shortid = require('shortid');

export const App = () => {
  return (
    <>
      <h1>PhoneBook</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

// export default App;
