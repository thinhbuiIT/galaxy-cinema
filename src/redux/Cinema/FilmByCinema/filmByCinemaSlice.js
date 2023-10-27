import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [],
    loading: false,
    error: null
}

const filmByCinemaSlice = createSlice({
    name: 'filmByCinema',
    initialState,
    reducers: {
        fetchFilmByCinemaStart: (state) => {
            state.loading = true
            state.error = null
        },
        fetchFilmByCinemaSuccess: (state, action) => {
            state.loading = false
            state.data = action.payload
        },
        fetchFilmByCinemaFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export const {
    fetchFilmByCinemaStart,
    fetchFilmByCinemaSuccess,
    fetchFilmByCinemaFailure
} = filmByCinemaSlice.actions
export default filmByCinemaSlice.reducer