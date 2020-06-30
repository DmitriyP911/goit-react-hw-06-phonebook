import { ADD_CONTACT, DELETE_CONTACT } from "../actions/actions";

export const contacts = ( state = [], action ) => {
    switch( action.type ) {
        case ADD_CONTACT:
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    number: action.number
                },
            ];
        case DELETE_CONTACT:
            return state.filter( ( contact ) => contact.id !== action.id );

        default:
            return state;
    }
};