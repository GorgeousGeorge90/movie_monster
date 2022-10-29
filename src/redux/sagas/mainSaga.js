import {put,call,takeEvery} from 'redux-saga/effects';
import {movieApi} from '../../api/api';
import {addFilms, addSeries, getIsFetching} from '../mainSlice';

function* addFilmsWorker() {
    yield put(getIsFetching(true))
    const response = yield call(()=> movieApi.getMovie())
    yield put(addFilms(response.data.results))
    yield put(getIsFetching(false))
}

function* addSeriesWorker() {
    yield put(getIsFetching(true))
    const response = yield call(()=> movieApi.getTV())
    yield put(addSeries(response.data.results))
    yield put(getIsFetching(false))
}

function* mainWatcher() {
    yield takeEvery('main/getFilms', addFilmsWorker)
    yield takeEvery('main/getSeries', addSeriesWorker)
}

export default mainWatcher