import {
    call, put,
  } from 'redux-saga/effects';
  
  function* callToAPI({
    apiCall, successResponseCode, errorType, callback, payload = null, errorCallback,
  }) {
    try {
      const response = yield call(apiCall, payload);
      if (response.status === successResponseCode) {
        yield callback(response);
      } else {
        if (errorCallback) {
          yield errorCallback(response);
        }
        yield put({ type: errorType, payload: response });
        yield put({
          type: 'PUSH_ERROR',
          payload: {
            errors: response.data.errors,
            status: response.status,
          },
        });
      }
    } catch (error) {
      yield put({ type: errorType, payload: { data: { errors: [error] } } });
      yield put({
        type: 'PUSH_CONNECTION_ERROR',
      });
    }
  }
  
  export default callToAPI;
  