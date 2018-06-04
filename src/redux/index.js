import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer.js';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux'
import history from '../history'

const enchancer = applyMiddleware(routerMiddleware(history), thunk, logger);

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    enchancer);

window.store = store;

export default store