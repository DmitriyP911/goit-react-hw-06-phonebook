import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { Notification } from "../Notification/Notification";
import styles from "./ContactsForm.module.css";
import slideTransition from "../../transitions/slide.module.css"
import PropTypes from "prop-types";
import { addContact } from "../../redux/actions/actions";

const initialState = {
    name: "",
    number: "",
};

const num = ( tel ) => tel !== '';

class ContactsForm extends Component {
    state = {
        ...initialState,
        notification: false
    };

    handleChange = ( { target: { name, value } } ) => {
        this.setState( { [name]: value } );
    };

    handleSubmit = ( e ) => {
        e.preventDefault();
        const { name, number } = this.state;
        const { contacts, dispatch } = this.props;
        if( contacts.find( ( contact ) => contact.name === name ) === undefined ) {
            if( num( number ) ) {
                dispatch( addContact( name, number ) );
            }
        } else {
            this.setState( {
                notification: true
            } )
            setTimeout( () => this.setState( { notification: false } ), 2500 );
        }
        this.setState( { ...initialState } );
    };

    render () {
        const { number, name, notification } = this.state;
        return (
            <>
                <form className={styles.form}
                    onSubmit={this.handleSubmit} >
                    <CSSTransition in timeout={500} classNames={slideTransition} appear>
                        <h1 className={styles.title}>Phonebook</h1>
                    </CSSTransition>
                    {
                        this.state.notification &&
                        <CSSTransition in={notification}
                            classNames={slideTransition}
                            appear
                            timeout={250}
                            unmountOnExit>
                            < Notification />
                        </CSSTransition>
                    }

                    <label className={styles.label}>Name</label>
                    <input
                        className={styles.input}
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        value={name}
                    />
                    <label className={styles.label}>Number</label>
                    <input
                        className={styles.input}
                        type="text"
                        name="number"
                        onChange={this.handleChange}
                        value={number}
                    />
                    <button className={styles.button}
                        type="submit">Add contact</button>
                </form>
            </>
        );
    }
}
ContactsForm.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape( {
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        } )
    ),
};
export default ContactsForm;