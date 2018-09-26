import { StateReducer } from "../../reducers";
import { loadPhonesAction } from "../actions/loadPhonesAction";
import { connect } from "react-redux";
import { PhoneList } from "./phoneList";

const mapStateToProps = (state: StateReducer) => ({
    phones: state.phones,
});

const mapDispatchToProps = (dispatch: any) => ({
    getPhones: () => dispatch(loadPhonesAction())
});

export const PhoneListContainer: any = connect(
    mapStateToProps,
    mapDispatchToProps
)(PhoneList);