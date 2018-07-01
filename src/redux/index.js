import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer.js';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import history from '../history'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware, routerMiddleware(history), thunk, logger);

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    enhancer);

window.store = store;

sagaMiddleware.run(rootSaga)

export default store