import styles from "./contactList.module.css";
import PropTypes from "prop-types";

const ContactList = ({ filteredContactsProp, handleDeleteProp }) => {
  return (
    <ul className={styles.TaskList}>
      {filteredContactsProp.map((contact) => (
        <li key={contact.id} className={styles.TaskList_item}>
          {contact.name}: {contact.number}
          <button
            className={styles.TaskList_button}
            type="button"
            onClick={() => handleDeleteProp(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  filteredContactsProp: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDeleteProp: PropTypes.func.isRequired,
};
