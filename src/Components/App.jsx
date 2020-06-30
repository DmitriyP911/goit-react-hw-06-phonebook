import React, { Component } from "react";

import Filter from "../redux/containers/Filter";
import ContactForm from "../redux/containers/ContactsForm";
import ContactList from "../redux/containers/ContactsList";

import { connect } from "react-redux";
import { addContact } from "../redux/actions/actions";
import { getContacts } from "../utils/getContacts";

class App extends Component {
    componentDidMount () {
        this.setState( {
            componentDidMount: true,
        } );

        if( !this.props.hasOwnProperty( "contacts" ) ) {
            const contacts = getContacts( "contacts" );

            if( contacts ) {
                contacts.map( ( contact ) =>
                    this.props.dispatch( addContact( contact.name, contact.number ) )
                );
            }
        }
    }

    render () {
        return (
            <div>
                <ContactForm />
                <Filter />
                <ContactList />
            </div>
        );
    }
}

export default connect()( App );