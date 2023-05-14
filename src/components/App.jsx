//redux 
import { useSelector } from "react-redux";

//components
import { ContactForm } from './ContactForm/contactForm';
import ContactList from './ContactList/contactList';
import Filter from './ContactFilter/contactFilter';
import styles from './style.module.css';

//const LOCALSTORAGE_KEY = 'contacts';

export const App = () => {

//Getting filter
const filter = useSelector(state => state.filter);

//getting contacts
const contacts = useSelector(state => state.contacts);


//functions

const handleFilter = () => {
  //console.log(filter);
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

  return (
    <div className={styles.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter/>
      <ContactList
        getVisibleContacts={handleFilter()}
      />
    </div>
  );
}

