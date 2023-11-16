import { ContactItemButton, ContactItemLi } from "./ContactItem.style";

export const ContactItem = ({ contact : { id, name, number }, onDelete }) => {
  return (
    <ContactItemLi>
      {name}: {number}
      <ContactItemButton onClick={() => onDelete(id)}>Delete</ContactItemButton>
    </ContactItemLi>
  );
};