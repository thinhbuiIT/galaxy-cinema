import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchBookingDetail } from '../../services/bookingApi';
import { getListBooking } from './bookingDetailSlice';

import createNotification from '../../utils/notifications';

function* fetchListBooking() {
    try {
        const response = yield call(fetchBookingDetail)
        yield put(getListBooking(response.data))
    } catch (error) {
        createNotification({type: 'error', message: 'Có lỗi trong quá trình chọn ghế'})
        console.log('fetchListBooking : ',error);
    }
}

function* rootListBooking() {
    yield takeEvery('APP_STARTUP', fetchListBooking)
}

export default rootListBooking;