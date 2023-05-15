//import PropTypes from 'prop-types';
import styles from './style.module.css';
import { useSelector, useDispatch } from "react-redux";
//import { setContactsFilter } from 'redux/actions';
import { setContactsFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const handleFilterChange = event => {
    dispatch(setContactsFilter(event.currentTarget.value));};

  return (
    <div>
      <label className={styles.text}>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Please enter name for search"
        />
      </label>
    </div>
  );
};

/* Filter.propTypes = {
  //filter: PropTypes.string.isRequired,
  //onChange: PropTypes.func.isRequired,
}; */

export default Filter;