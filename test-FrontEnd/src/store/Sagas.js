import { fork, all } from "redux-saga/effects";

import AuthSaga from "../services/Auth/AuthSaga";
import ServiceSaga from "../services/ServiceRequest/ServiceSaga";
export default function* rootSaga() {
  yield all([fork(AuthSaga), fork(ServiceSaga)]);
}
