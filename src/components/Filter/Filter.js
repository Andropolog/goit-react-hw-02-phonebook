import PropTypes from "prop-types";

const Filter = ({ filter, handleChange }) => {
  return (
    <label>
      Find contacts by name <br />
      <input type="text" name="filter" value={filter} onChange={handleChange} />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
