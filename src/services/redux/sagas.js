import { all } from 'redux-saga/effects';
import SuscriptionsSaga from './suscriptions/saga';

export default function* rootSaga() {
    yield all([
        SuscriptionsSaga(),
    ]);
}