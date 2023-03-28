import {combineReducers, createStore, applyMiddleware} from 'redux';
import cakeReducer from '../reducer/cakeReducer';
import iceCreamReducer from '../reducer/iceCreamReducer';
import userReducer from '../reducer/userRedeucer';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';

const rootStore = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
})

const store = createStore(rootStore,composeWithDevTools(applyMiddleware(logger,thunk)) )

export default store;