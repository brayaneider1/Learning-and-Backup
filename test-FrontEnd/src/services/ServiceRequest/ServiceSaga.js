import { put, takeLatest, all } from "redux-saga/effects";
import { message } from "antd";
import { service } from "./ServiceActions";
import Api from "../../common/Api/data.json";
import { push } from "react-router-redux";

function* getService() {
  try {
    const response = Api;
    if (response) {
      console.log('response saga',response);
      yield put(service.getServiceResponse(response.services));
      yield put(push("/"));
    } else {
      const err = new TypeError("ERROR_LOGIN");
      message.error("Ha sucedido un error al obtener los datos");
      yield put(service.getServiceResponse(err));
    }
  } catch (error) {
    const err = new TypeError("ERROR_LOGIN");
    message.error("Ha sucedido un error al obtener los datos");
    yield put(service.getServiceResponse(err));
  }
}

function* getCouncils() {
	try {
	  const response = Api;
	  if (response) {
		console.log('response saga',response);
		yield put(service.getCouncilsResponse(response.councils));
		yield put(push("/"));
	  } else {
		const err = new TypeError("ERROR_LOGIN");
		message.error("Ha sucedido un error al obtener los datos");
		yield put(service.getCouncilsResponse(err));
	  }
	} catch (error) {
	  const err = new TypeError("ERROR_LOGIN");
	  message.error("Ha sucedido un error al obtener los datos");
	  yield put(service.getCouncilsResponse(err));
	}
  }

function* ActionWatcher() {
  yield takeLatest(service.getService, getService);
  yield takeLatest(service.getCouncils, getCouncils);

}

export default function* rootSaga() {
  yield all([ActionWatcher()]);
}
