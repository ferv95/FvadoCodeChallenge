import { phoneModel } from "../models/phoneModel";
import { actionTypes } from "../common/actionTypes";

export const phonesReducer = (state: phoneModel[] = [], action: any) => {
    switch (action.type) {
        case actionTypes.LOAD_PHONES:
            return handleLoadPhonesCompleted(state, action.payload);
    }
    return state;
};

const handleLoadPhonesCompleted = (state: phoneModel[], payload: phoneModel[]) => {
    return payload;
}