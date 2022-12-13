import PropTypes from 'prop-types';
import styles from './style.module.css';

const ContactItem = ({id, name, number, deleteContact}) => {
            return (
              <li className={styles.listItem} id={id}>
                <span>{name}: </span>
                <span>{number}</span>
                <button
                  type="button"
                  className={styles.btn}
                  onClick={event => deleteContact(event)}
                >
                  Delete
                </button>
              </li>
            );
          }

ContactItem.propTypes = {

    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;