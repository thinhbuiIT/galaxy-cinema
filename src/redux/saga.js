import { all } from "redux-saga/effects";

import rootCinemaSaga from "./Cinema/cinemaSaga";
import rootFilmSaga from "./Film/filmSaga";
import rootUser from "./User/userSaga";
// import rootListBooking from "./BookingDetail/bookingDetailSaga";

function* rootSaga() {
    yield all([
        rootFilmSaga(),
        rootCinemaSaga(),
        rootUser(),
        // rootListBooking()
    ]);
}

export default rootSaga;