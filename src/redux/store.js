import { applyMiddleware, createStore } from 'redux';
import cakeReducer from './cake/cakeReducers'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    cakeReducer,
    composeWithDevTools(applyMiddleware(logger))
    )

export default store;