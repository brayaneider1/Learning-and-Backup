import { put, all, takeLatest } from 'redux-saga/effects';
import decode from 'jwt-decode';
import { authActions } from './AuthSlice';
import ApiService from '../../common/api/Api';
import { StorageService } from '../../common/storage/storage-service';

  function* login({ payload }) {
    yield put(authActions.onChangeStatus('loading'))
    try {
      const response = yield ApiService.post('login/email', payload)
      try {
        StorageService.setItem('token', response.token)
        yield put(authActions.setToken(response.token))
        yield put(authActions.fetchUser())
      }
      catch (err) {
        return TypeError(err)
      }
    } catch (err) {
      yield put(authActions.onError(err.toString()))
    }
  }
  
  function* checkIsAuth() {
    try {
      const token = yield StorageService.getItem('token');
      try {
        let { exp } = decode(token);
        if (Date.now() <= exp * 1000) {
          yield put(authActions.setToken(token))
        } else {
          return TypeError('El token ha expirado');
        }
        yield put(authActions.fetchUser())
      }
      catch(e) {
        return e;
      }
    }
    catch(err) {
      yield put(authActions.onError(err.toString()))
    }
  }

  function* fetchUser() {
    yield put(authActions.onChangeStatus('loading'))
    try {
      const user = yield ApiService.get('user-data')
      yield put(authActions.setUserData(user))
      yield put(authActions.onChangeStatus('success'))
    } catch (err) {
      yield put(authActions.onError(err.toString()))
    }
  }

  function* signup({ payload }) {
    const { email, password } = payload;
    payload['profile']['country_id'] = 2;
    yield put(authActions.onChangeStatus('loading'))
    try {
      yield ApiService.post('register/email', payload)
      yield put(authActions.onChangeStatus('success'))
      yield put(authActions.login({email, password}))
    } catch (err) {
      yield put(authActions.onError(err.message))
    }
  }

  function* logout() {
    yield StorageService.clear()
  }

  function* ActionWatcher() {
    yield takeLatest(authActions.login, login)
    yield takeLatest(authActions.checkIsAuth, checkIsAuth)
    yield takeLatest(authActions.fetchUser, fetchUser)
    yield takeLatest(authActions.signup, signup)
    yield takeLatest(authActions.logout, logout)
  }
  
  export default function*() {
    yield all([
      ActionWatcher(),
    ]);
  }

