import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';
import persistReducers from '~/store/persistReducers';

import rootReducer from '~/store/modules/rootReducer';
import rootSaga from '~/store/modules/rootSaga';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const store = createStore(persistReducers(rootReducer), [sagaMiddleware]);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
