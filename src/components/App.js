import { useEffect, useState } from "react";
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm";
import { Filter } from "./Filter";
import { ContactList } from "./ContactList";
import { AppContainer, AppTitle, AppTitleContact } from "./App.style";

const storageKey = 'list-contacts';
export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem(storageKey);
    return savedContacts !== null ? JSON.parse(savedContacts) : [];
    }
   );
  const [filter, setFilter] = useState('');

  useEffect(() => {window.localStorage.setItem('list-contacts', JSON.stringify(contacts))
  }, [contacts]);

  const addContact = newContact => {
    const contact = {
      ...newContact,
      id: nanoid(),      
    };
    
      if (contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

     setContacts(prevContacts => [...prevContacts, contact],
    )};

  const deleteContact = contactId => {
     setContacts(prevContacts => [...prevContacts.filter(contact => contact.id !== contactId)] 
    );
  };
  
  const handleFilterChange = (filter) => {
        setFilter(filter);
  };

   const filteredContacts = contacts.filter((contact) =>
  contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );

  return (
      <AppContainer>
        <AppTitle>Phonebook</AppTitle>
        <ContactForm addContact={addContact} />

        {contacts.length > 0 ? (
          <>
             <AppTitleContact>Contacts list</AppTitleContact>
             <Filter filter={filter} onChange={handleFilterChange} />       
             <ContactList contacts={filteredContacts} onDelete={deleteContact} />
          </>
        ) : null}
            
        <GlobalStyle />
      </AppContainer>
    );  
};
  
 