import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import rootSagas from './rootSagas';
import rootReducers from './rootReducers';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSagas);

export default store;