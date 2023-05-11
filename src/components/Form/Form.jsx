import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { PhonebookForm, SubmitBtn, FormTitle, FormItem } from './Form.styled';

export const Form = ({ addContact }) => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };
  const onFormSubmit = e => {
    e.preventDefault();

    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    addContact(contact);

    setName('');
    setNumber('');
  };
  return (
    <PhonebookForm>
      <form onSubmit={onFormSubmit}>
        <FormTitle>Phonebook</FormTitle>
        <FormItem>Name</FormItem>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <FormItem>Number</FormItem>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </form>
    </PhonebookForm>
  );
};

Form.propTypes = {
  addContact: PropTypes.func.isRequired,
};

// import PropTypes from 'prop-types';
// import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { PhonebookForm, SubmitBtn, FormTitle, FormItem } from './Form.styled';

// export class Form extends Component {
//   state = {
//     number: '',
//     name: '',
//   };

//   handleChange = e => {
//     this.setState({
//       [e.currentTarget.name]: e.currentTarget.value,
//     });
//   };

//   onFormSubmit = e => {
//     e.preventDefault();

//     const contact = {
//       id: nanoid(),
//       name: this.state.name,
//       number: this.state.number,
//     };

//     this.props.addContact(contact);

//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     return (
//       <PhonebookForm>
//         <form onSubmit={this.onFormSubmit}>
//           <FormTitle>Phonebook</FormTitle>
//           <FormItem>Name</FormItem>
//           <input
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleChange}
//             // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//           <FormItem>Number</FormItem>
//           <input
//             type="tel"
//             name="number"
//             value={this.state.number}
//             onChange={this.handleChange}
//             // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//           <SubmitBtn type="submit">Add contact</SubmitBtn>
//         </form>
//       </PhonebookForm>
//     );
//   }
// }

// Form.propTypes = {
//   addContact: PropTypes.func.isRequired,
// };
