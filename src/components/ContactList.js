import { ContactItem } from "./ContactItem";
import { ContactListUl } from "./ContactList.style";

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ContactListUl>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
        />
      ))}
    </ContactListUl>
  );
};