import shortid from 'shortid';

export const ADD_CONTACT = "ADD_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const CONTACTS_FILTER = "CONTACTS_FILTER";

export const addContact = ( name, number ) => ( {
    type: ADD_CONTACT,
    id: shortid.generate(),
    name,
    number,
} );

export const deleteContact = ( id ) => ( {
    type: DELETE_CONTACT,
    id,
} );

export const filter = ( filter ) => ( {
    type: CONTACTS_FILTER,
    filter,
} );