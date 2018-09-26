import { StateReducer } from "../../reducers";
import { Spinner } from "./spinner";
import { connect } from "react-redux";

const mapStateToProps = (state: StateReducer) => ({
    isFetching: state.isFetching,
});

export const SpinnerContainer = connect(
    mapStateToProps,
)(Spinner);
