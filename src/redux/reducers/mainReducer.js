import { combineReducers } from "redux";
import { contacts } from "./contact";
import { filter } from "./filter";

export default combineReducers( {
    contacts,
    filter,
} );