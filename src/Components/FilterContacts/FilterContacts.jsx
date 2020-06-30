import React from "react";
import PropTypes from "prop-types";
import styles from "./FilterContacts.module.css";
import slideTransition from "../../transitions/slide.module.css"
import { CSSTransition } from "react-transition-group";

const FilterContacts = ( { contactsFilter, contacts, filter } ) => (
    <CSSTransition
        in={contacts.length > 1}
        timeout={250}
        classNames={slideTransition}
        unmountOnExit
    >
        <div>
            <h2 className={styles.title}>Find contact</h2>
            <input
                className={styles.input}
                type="text"
                name="filter"
                onChange={contactsFilter}
                value={filter}
            />
        </div>
    </CSSTransition>
);

FilterContacts.propTypes = {
    contactsFilter: PropTypes.func.isRequired,
    filter: PropTypes.string,
    contacts: PropTypes.arrayOf(
        PropTypes.shape( {
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        } ).isRequired
    ),
};

export default FilterContacts;