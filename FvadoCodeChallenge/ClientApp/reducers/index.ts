import { combineReducers } from 'redux';
import { phoneModel } from "../models/phoneModel";
import { phonesReducer } from './phonesReducer';
import { fetchReducer } from './fetchReducer';

export interface StateReducer {
    phones: phoneModel[];
    isFetching: boolean;
}

export const state = combineReducers<StateReducer>({
    phones: phonesReducer,
    isFetching: fetchReducer,
});