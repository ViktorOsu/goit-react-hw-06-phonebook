import React, { useState, useEffect } from 'react';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { PhoneBook, ContactsTitle, ContactsWper } from './App.styled';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const addContact = data => {
    const isName = contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (!isName) {
      setContacts(prevContacts => [{ ...data, id: nanoid() }, ...prevContacts]);
    } else {
      alert(`${data.name} is already in your contacts.`);
    }
  };

  const itemDelete = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const filterName = value => {
    setFilter(value);
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  useEffect(() => {
    const contactsData = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsData);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <PhoneBook>
      <Form addContact={addContact} />
      <ContactsWper>
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter onChangeFilter={filterName} />
        <ContactList contacts={filteredContacts()} itemDelete={itemDelete} />
      </ContactsWper>
    </PhoneBook>
  );
};

// ======================================================
// import React, { Component } from 'react';
// import { Form } from './Form/Form';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';
// import { PhoneBook, ContactsTitle, ContactsWper } from './App.styled';
// import { nanoid } from 'nanoid';

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   addContact = data => {
//     const isName = this.state.contacts.some(
//       contact => contact.name.toLowerCase() === data.name.toLowerCase()
//     );
//     if (!isName) {
//       this.setState(({ contacts }) => {
//         return { contacts: [{ ...data, id: nanoid() }, ...contacts] };
//       });
//     } else {
//       alert(`${data.name} is already in your contacts.`);
//     }
//   };

//   itemDelete = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   filterName = value => {
//     this.setState({ filter: value });
//   };

//   filteredContacts = () => {
//     return this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
//     );
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     return (
//       <PhoneBook>
//         <Form addContact={this.addContact} />
//         <ContactsWper>
//           <ContactsTitle>Contacts</ContactsTitle>
//           <Filter onChangeFilter={this.filterName} />
//           <ContactList
//             contacts={this.filteredContacts()}
//             itemDelete={this.itemDelete}
//           />
//         </ContactsWper>
//       </PhoneBook>
//     );
//   }
// }
