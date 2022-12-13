import PropTypes from 'prop-types';
import styles from './style.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <div>
      <label className={styles.text}>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
          placeholder="Please enter name for search"
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;