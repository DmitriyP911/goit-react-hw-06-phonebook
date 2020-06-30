
import { connect } from "react-redux";
import ContactsList from "../../Components/ContactsList/ContactsList";
import { deleteContact } from "../actions/actions";

const mapDispatchToProps = ( dispatch ) => ( {
    deleteContact: ( { target: { name } } ) => dispatch( deleteContact( name ) )
} );

const mapStateToProps = ( state ) => ( {
    contacts: state.contacts,
    filter: state.filter,
} );

export default connect( mapStateToProps, mapDispatchToProps )( ContactsList );