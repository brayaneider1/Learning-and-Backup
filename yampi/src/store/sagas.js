import { fork, all } from 'redux-saga/effects';

import AuthSaga from '../services/Auth/AuthSaga';
import AppSaga from '../services/App/AppSaga';
import propertiesSaga from '../services/Properties/PropertiesSaga';

export default function* rootSaga() {
  yield all([
    fork(AuthSaga),
    fork(AppSaga),
    fork(propertiesSaga)
  ]);
}