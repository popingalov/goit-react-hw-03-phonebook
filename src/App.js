import React, { Component } from 'react';
import './App.css';

import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';

import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [],
    value: 0,
    filter: '',
  };
  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    parsedContacts && this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevState) {
    this.state.contacts !== prevState.contacts &&
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  addContact = (name, number) => {
    if (this.state.contacts.find(contact => name === contact.name)) {
      alert(name + ' is already in contacts');
      return;
    }

    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  handleChangeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  filteredContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  deleteContact = contactId => {
    this.setState(() => {
      return {
        contacts: this.state.contacts.filter(
          contact => contact.id !== contactId,
        ),
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />

        <h2>Contacts</h2>
        {this.state.contacts.length > 1 && (
          <Filter
            handleChangeFilter={this.handleChangeFilter}
            filter={this.state.filter}
          />
        )}
        <ContactList
          contacts={this.filteredContact()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
