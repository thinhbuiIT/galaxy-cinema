import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { fetchFilmSuccess, fetchFilmError, fetchFilmStart } from './filmSlice'
import { fetchCinemaByFilm, fetchFilmNowAndSoon } from '../../services/movieApi'
import { fetchCinemaByFilmFailure, fetchCinemaByFilmStart, fetchCinemaByFilmSuccess } from './CinemaByFilm/cinemaByFilmSlice';

function* fetchFilmSaga() {
    try {
        yield delay(500)
        yield put(fetchFilmStart())
        const data = yield call(fetchFilmNowAndSoon);
        yield put(fetchFilmSuccess(data));
    } catch (error) {
        yield put(fetchFilmError(error));
    }
}
function* fetchCinemaByFilmSaga(action) {
    try {
        yield put(fetchCinemaByFilmStart())
        const response = yield call(fetchCinemaByFilm, action.payload)
        yield put(fetchCinemaByFilmSuccess(response.data))
    } catch (error) {
        yield put(fetchCinemaByFilmFailure(error))
    }
}
function* rootFilmSaga() {
    yield takeEvery('APP_STARTUP', fetchFilmSaga);
    yield takeEvery('FETCH_CINEMA_BY_FILM', fetchCinemaByFilmSaga);
}

export default rootFilmSaga;