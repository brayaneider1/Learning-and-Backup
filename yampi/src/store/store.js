import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { logger } from 'redux-logger';

import rootSaga from "./sagas";
import rootReducers from './reducers';

let sagaMiddleware = createSagaMiddleware();

const middleware = [
  ...getDefaultMiddleware({ thunk: false })
  .concat(sagaMiddleware)
  .concat(logger)
];

const store = configureStore({
  reducer: rootReducers,
  middleware
});

sagaMiddleware.run(rootSaga);

export default store;
  