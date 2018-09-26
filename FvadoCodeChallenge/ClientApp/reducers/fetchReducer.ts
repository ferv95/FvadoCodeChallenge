import { actionTypes } from "../common/actionTypes";

export const fetchReducer = (state: boolean = true, action: any) => {
    switch (action.type) {
        case actionTypes.FETCH_PHONES_COMPLETED:
            return handleFetchPhonesCompleted(state, action.payload);
        case actionTypes.FETCH_PHONES_START:
            return handleFetchPhonesStart(state, action.payload);
    }
    return state;
};

const handleFetchPhonesCompleted = (state: boolean, payload: boolean) => {
    return payload;
}

const handleFetchPhonesStart = (state: boolean, payload: boolean) => {
    return payload;
}