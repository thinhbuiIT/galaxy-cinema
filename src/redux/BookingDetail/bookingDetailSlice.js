import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    listBooking: []
}

const bookingDetailSlice = createSlice({
    name: 'bookingDetail',
    initialState,
    reducers: {
        getListBooking: (state, action) => {
            state.listBooking = action.payload
        }
    }
})

export const {getListBooking} = bookingDetailSlice.actions
export default bookingDetailSlice.reducer