import PropTypes from 'prop-types';
import styles from './style.module.css';

// Импортируем хук
import { useDispatch } from "react-redux";
// Импортируем генератор экшена
import { deleteContact } from 'redux/actions';

const ContactItem = ({id, name, number}) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
            return (
              <li className={styles.listItem} id={id}>
                <span>{name}: </span>
                <span>{number}</span>
                <button
                  type="button"
                  className={styles.btn}
                  onClick={handleDelete}
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
    //deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;