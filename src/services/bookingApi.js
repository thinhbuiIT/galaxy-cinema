import { api } from '../utils/customize-axios'


export const fetchBooking = async () => {
    return await api.get('/booking')
}

export const fetchBookingByIdAndSession = async (cinemaId, sessionId) => {
    return await api.get(`/booking/${cinemaId}/${sessionId}`)
}

export const fetchBookingDetail = async () => {
    return await api.get('/booking/detail')
}