import { all } from 'redux-saga/effects';

function* ActionWatcher() {}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}