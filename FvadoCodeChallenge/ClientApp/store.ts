import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { state, StateReducer } from './reducers';
import { createStore, applyMiddleware, Store } from 'redux';

const middlewares = [
    reduxThunk,
    logger
];

export const store: Store<StateReducer> = createStore(
    state,
    applyMiddleware(...middlewares)
);