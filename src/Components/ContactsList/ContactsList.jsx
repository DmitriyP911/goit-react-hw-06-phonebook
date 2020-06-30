import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./ContactList.module.css"
import PropTypes from "prop-types";
import slideTransition from '../../transitions/slide.module.css';
import { setContacts } from "../../utils/getContacts";

const ContactList = ( { contacts, filter, deleteContact } ) => {
    if( contacts.length ) {
        setContacts( "contacts", contacts );
    }

    return (
        <div className={styles.wrap}>
            {
                !!contacts.length && <h2>Contacts</h2>
            }
            <TransitionGroup
                className={styles.list}
                component="ul" >
                {contacts.map( ( contact ) =>
                    contact.name.toLowerCase().includes( filter.toLowerCase() )
                        ?
                        (
                            <CSSTransition
                                key={contact.id}
                                timeout={250}
                                unmountOnExit
                                classNames={slideTransition}
                            >
                                <li className={styles.listItem}>
                                    <p >
                                        {contact.name}
                                    </p>
                                    <p>
                                        Number: {contact.number}
                                    </p>
                                    <button
                                        className={styles.button}
                                        name={contact.id}
                                        onClick={deleteContact}
                                    >
                                        Delete
                                </button>
                                </li>
                            </CSSTransition>
                        ) : null
                )}
            </TransitionGroup>
        </div >
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape( {
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        } )
    ),
    filter: PropTypes.string,
    deleteContact: PropTypes.func.isRequired,
};

export default ContactList;