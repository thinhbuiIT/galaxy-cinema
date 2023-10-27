import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [],
    loading: false,
    error: null
}

const cinemaSlice = createSlice({
    name: 'cinema',
    initialState,
    reducers: {
        fetchCinemaStart: (state) => {
            state.loading = true
            state.error = null
        },
        fetchCinemaSuccess: (state, action) => {
            state.loading = false
            state.data = action.payload
        },
        fetchCinemaFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export const { fetchCinemaStart, fetchCinemaSuccess, fetchCinemaFailure } = cinemaSlice.actions
export default cinemaSlice.reducer