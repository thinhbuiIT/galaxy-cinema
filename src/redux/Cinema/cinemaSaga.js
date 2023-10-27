import { call, put, takeEvery } from "redux-saga/effects";
import { fetchCinemaFailure, fetchCinemaStart, fetchCinemaSuccess } from "./cinemaSlice";
import { fetchCinemas, fetchFilmByCinemas } from "../../services/cinemaApi";
import { fetchFilmByCinemaStart,fetchFilmByCinemaSuccess, fetchFilmByCinemaFailure } from "./FilmByCinema/filmByCinemaSlice";

function* fetchCinemaSaga() {
    try {
        yield put(fetchCinemaStart())
        const data = yield call(fetchCinemas)
        yield put(fetchCinemaSuccess(data))
    } catch (error) {
        yield put(fetchCinemaFailure(error))
    }
}

function* fetchFilmByCinemaSaga(action) {
    try {
        yield put(fetchFilmByCinemaStart())
        const response = yield call(fetchFilmByCinemas, action.payload)
        yield put(fetchFilmByCinemaSuccess(response.data))
    } catch (error) {
        yield put(fetchFilmByCinemaFailure(error))
    }
}

function* rootCinemaSaga() {
    yield takeEvery('APP_STARTUP', fetchCinemaSaga)
    yield takeEvery('FETCH_FILM_BY_CINEMA', fetchFilmByCinemaSaga)
}

export default rootCinemaSaga