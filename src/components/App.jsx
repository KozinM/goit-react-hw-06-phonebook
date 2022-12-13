import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/contactForm';
import ContactList from './ContactList/contactList';
import Filter from './ContactFilter/contactFilter';
import styles from './style.module.css';

const LOCALSTORAGE_KEY = 'contacts';

export const App = () => {

//state & didMount
const [contacts, setContacts] = useState(()=>
  JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) ?? [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
const [filter, setFilter] = useState('');

//didUpdate
useEffect(()=>{
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(contacts))
},[contacts]);


//functions
const handleChange = event => {
  setFilter(event.currentTarget.value);
};

const addContacts = data => {
  const { name } = data;
  const isContactExist = contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );
  if (isContactExist) {
    return alert(`${name} is already in contacts`);
  }
  setContacts(prevState => {
    return [...prevState, data]
  });
};

const handleFilter = () => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const handleDelete = event => {
  const elementToRemove = event.currentTarget.parentNode.id;
    setContacts(contacts.filter(contact => contact.id !== elementToRemove));
};

  return (
    <div className={styles.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm addContacts={addContacts} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={handleChange} />
      <ContactList
        getVisibleContacts={handleFilter()}
        deleteContact={handleDelete}
      />
    </div>
  );
}

/* export class oldApp extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  
  componentDidMount() {
    const afterMount = localStorage.getItem(LOCALSTORAGE_KEY);
    const afterMountParsed = JSON.parse(afterMount);
    if (afterMountParsed) {
      this.setState({ contacts: afterMountParsed });
    }
  }

  componentDidUpdate(prevState) {
    const currentContacts = this.state.contacts;
    const prevContacts = prevState.contacts;
    if (prevContacts !== currentContacts) {
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentContacts));
    }
  }

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  addContacts = data => {
    const { contacts } = this.state;
    const { name } = data;
    const isContactExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isContactExist) {
      return alert(`${name} is already in contacts`);
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  handleFilter = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  handleDelete = event => {
    const { contacts } = this.state;
    const elementToRemove = event.currentTarget.parentNode.id;
    this.setState({
      contacts: contacts.filter(contact => contact.id !== elementToRemove),
    });
  };

  render() {
    const { filter } = this.state;

    return (
      <div className={styles.wrapper}>
        <h1>Phonebook</h1>
        <ContactForm addContacts={this.addContacts} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleChange} />
        <ContactList
          getVisibleContacts={this.handleFilter()}
          deleteContact={this.handleDelete}
        />
      </div>
    );
  }
} */