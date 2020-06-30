import { CONTACTS_FILTER } from "../actions/actions";

export const filter = ( state = "", action ) => {
    switch( action.type ) {
        case CONTACTS_FILTER:
            return action.filter;

        default:
            return state;
    }
};