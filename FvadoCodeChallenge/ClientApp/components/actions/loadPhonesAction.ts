import { phoneAPI } from "../../api";
import { phoneModel } from "../../models/phoneModel";
import { actionTypes } from "../../common/actionTypes";
import {startFetchAction, endFetchAction} from "../../common/actions/fetchActions"

export const loadPhonesAction = () => (dispatch: any) => {

    dispatch(startFetchAction());

    phoneAPI.getPhones().then((result) => {
        dispatch(loadPhonesCompleted(result));
    }).then(() => {
        dispatch(endFetchAction());
    });

    const loadPhonesCompleted = (result: phoneModel[]) => ({
        type: actionTypes.LOAD_PHONES,
        payload: result,
        meta: {
            httpEnd: true
        }
    });

};
