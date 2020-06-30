import { connect } from "react-redux";
import ContactsForm from "../../Components/ContactsForm/ContactsForm";

const mapStateToProps = ( state ) => ( {
    contacts: state.contacts,
} );

export default connect( mapStateToProps, null )( ContactsForm );