import { call, put, takeEvery } from 'redux-saga/effects';

import { loginStart, loginSuccess, loginFailure } from './userSlice';
import { login, register } from '../../services/userAPI';

import createNotification from '../../utils/notifications';
import { LOGIN_ERROR_DESC, REGISTER_ERROR_DESC } from '../../Constant/constNotifications';

function* HandleLogin(action) {
    try {
        yield put(loginStart())
        const response = yield call(login, action.payload)
        // localStorage.setItem('user', response.data.Email)
        yield put(loginSuccess(response.data))
        yield createNotification({ type: 'success', message: 'Đăng nhập thành công' })
    } catch (error) {
        yield createNotification({ type: 'error', message: 'Đăng nhập không thành công', desc: LOGIN_ERROR_DESC })
        yield put(loginFailure(error))
    }
}

function* HandleRegister(action) {
    try {
        const response = yield call(register, { ...action.payload, Role: 0 })
        yield createNotification({ type: 'success', message: 'Đăng ký thành công' })
    } catch (error) {
        yield createNotification({ type: 'error', message: 'Đăng ký không thành công', desc: REGISTER_ERROR_DESC })
        console.log(error)
    }
}

function* rootUser() {
    yield takeEvery('LOGIN', HandleLogin)
    yield takeEvery('REGISTER', HandleRegister)
}

export default rootUser