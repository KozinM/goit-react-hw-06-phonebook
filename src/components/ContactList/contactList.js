import PropTypes from 'prop-types';
import styles from './style.module.css';
import ContactItem from './ContactItem/contactItem';

const ContactList = ({ getVisibleContacts}) => {
  return (
    <div>
      <ul className={styles.contactsList}>
        {getVisibleContacts.map(({ id, name, number }) => {
          return (
            <ContactItem 
             key={id}
             id={id}
             name={name} 
             number={number}
             />
          );
        })}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  getVisibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;