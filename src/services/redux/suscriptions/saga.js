import {
    all, fork, takeLatest, put, takeEvery,
  } from 'redux-saga/effects';
  import * as Api from '../../api/suscriptions';
  import callToApi from '../../utils/callToAPI';
  import {
    GET_SUSCRIPTIONS_ERROR,
    GET_SUSCRIPTIONS_SUCCESS,
    GET_SUSCRIPTIONS_REQUEST,
    CREATE_SUSCRIPTION_SUCCESS,
    CREATE_SUSCRIPTION_ERROR,
    DELETE_SUSCRIPTION_ERROR,
    DELETE_SUSCRIPTION_SUCCESS,
    CREATE_SUSCRIPTION_REQUEST,
    DELETE_SUSCRIPTION_REQUEST,
    UPDATE_SUSCRIPTION_REQUEST,
    UPDATE_SUSCRIPTION_SUCCESS,
  } from './types';
  import Suscription from '../../../models/Suscription';
  
  function* getSuscriptions({ payload }) {
    yield callToApi(({
      apiCall: Api.getSuscriptions,
      successResponseCode: 200,
      errorType: GET_SUSCRIPTIONS_ERROR,
      * callback({ data }) {
        const suscriptions = data.map((d) => new Suscription(d));
        yield put({ type: GET_SUSCRIPTIONS_SUCCESS, payload: suscriptions });
      },
      payload,
    }));
  }
  
  function* createSuscription({ payload }) {
    yield callToApi(({
      apiCall: Api.createSuscription,
      successResponseCode: 201,
      errorType: CREATE_SUSCRIPTION_ERROR,
      * callback({ data }) {
        yield put({ type: CREATE_SUSCRIPTION_SUCCESS, payload: new Suscription(data) });
      },
      payload,
    }));
  }
  
  function* updateSuscription({ payload }) {
    yield callToApi(({
      apiCall: Api.updateSuscription,
      successResponseCode: 200,
      errorType: UPDATE_SUSCRIPTION_SUCCESS,
      * callback({ data }) {
        yield put({ type: UPDATE_SUSCRIPTION_SUCCESS, payload: new Suscription(data) });
      },
      payload,
    }));
  }
  
  function* deleteSuscription({ payload }) {
    yield callToApi(({
      apiCall: Api.deleteSuscription,
      successResponseCode: 204,
      errorType: DELETE_SUSCRIPTION_ERROR,
      * callback() {
        yield put({ type: DELETE_SUSCRIPTION_SUCCESS, payload });
      },
      payload,
    }));
  }
  
  function* watchGetSuscriptions() {
    yield takeLatest(GET_SUSCRIPTIONS_REQUEST, getSuscriptions);
  }
  
  function* watchCreateSuscription() {
    yield takeLatest(CREATE_SUSCRIPTION_REQUEST, createSuscription);
  }
  
  function* watchDeleteSuscription() {
    yield takeEvery(DELETE_SUSCRIPTION_REQUEST, deleteSuscription);
  }
  
  function* watchUpdateSuscription() {
    yield takeLatest(UPDATE_SUSCRIPTION_REQUEST, updateSuscription);
  }
  
  export default function* rootSaga() {
    yield all([
      fork(watchGetSuscriptions),
      fork(watchCreateSuscription),
      fork(watchDeleteSuscription),
      fork(watchUpdateSuscription),
    ]);
  }
  