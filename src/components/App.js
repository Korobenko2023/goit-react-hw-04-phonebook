import { Component } from "react";
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm";
import { Filter } from "./Filter";
import { ContactList } from "./ContactList";
import { AppContainer, AppTitle, AppTitleContact } from "./App.style";

const storageKey = 'list-contacts';
export class App extends Component {
    state = {
      contacts: [],
      filter: '',
  }; 

  componentDidMount() {
    const savedContacts = window.localStorage.getItem(storageKey);
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      window.localStorage.setItem(
        'list-contacts',
        JSON.stringify(this.state.contacts));
    }    
  }

  addContact = newContact => {
    const { contacts } = this.state;
    const { name, number } = newContact;

    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
      return;
    }

     this.setState(prevState => ({
      contacts: [...prevState.contacts,{ id: nanoid(), name, number }],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

    handleFilterChange = (filter) => {
        this.setState({ filter });
  };
   
  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
  contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
        
    return (
      <AppContainer>
        <AppTitle>Phonebook</AppTitle>
        <ContactForm addContact={this.addContact} />

        {contacts.length > 0 ? (
          <>
             <AppTitleContact>Contacts list</AppTitleContact>
             <Filter filter={filter} onChange={this.handleFilterChange} />       
             <ContactList contacts={filteredContacts} onDelete={this.deleteContact} />
          </>
        ) : null}
            
        <GlobalStyle />
      </AppContainer>
    );
  }
}
