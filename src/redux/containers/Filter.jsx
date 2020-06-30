import { connect } from "react-redux";
import FilterContacts from "../../Components/FilterContacts/FilterContacts";
import { filter } from "../actions/actions";

const mapDispatchToProps = ( dispatch ) => ( {
    contactsFilter: ( { target: { value } } ) => dispatch( filter( value ) ),
} );

const mapStateToProps = ( state ) => ( {
    contacts: state.contacts,
    filter: state.contactsFilter,
} );

export default connect( mapStateToProps, mapDispatchToProps )( FilterContacts );