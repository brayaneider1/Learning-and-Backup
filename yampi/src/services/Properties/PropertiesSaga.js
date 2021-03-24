import { put, all, takeLatest } from 'redux-saga/effects';
import { propertiesActions } from './PropertiesSlice';
import ApiService from '../../common/api/Api';
import { Alert } from 'react-native';

  function* getAll({payload}) {

    const { latitude = 0, longitude = 0 } = payload;

    try {
      yield put(propertiesActions.onChangeStatus('loading'))
      const response = yield ApiService.get(`property?latitude=${latitude}&longitude=${longitude}`)
      yield put(propertiesActions.setProperties(response.data))
      yield put(propertiesActions.onChangeStatus('success'))
    } catch (err) {
      yield put(propertiesActions.onError('No se pudo obtener el listado de propiedades'))
    }
  }

  function* search({payload}) {
    try {
      yield put(propertiesActions.onChangeStatus('loading'))
      const response = yield ApiService.post(`property-filter`, payload)
      yield put(propertiesActions.setProperties(response.data))
      yield put(propertiesActions.onChangeStatus('success'))
    } catch (err) {
      yield put(propertiesActions.onError('No se pudo obtener el listado de propiedades'))
    }
  }

  function* ActionWatcher() {
    yield takeLatest(propertiesActions.getAll, getAll)
    yield takeLatest(propertiesActions.search, search)
  }
  
  export default function*() {
    yield all([
      ActionWatcher(),
    ]);
  }

