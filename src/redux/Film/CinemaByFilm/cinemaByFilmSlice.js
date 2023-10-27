import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [],
    loading: false,
    error: null
}

const cinemaByFilmSlice = createSlice({
    name: 'cinemaByFilm',
    initialState,
    reducers: {
        fetchCinemaByFilmStart: (state) => {
            state.loading = true
            state.error = null
        },
        fetchCinemaByFilmSuccess : (state, action) => {
            state.loading = false
            state.data = action.payload
        },
        fetchCinemaByFilmFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export const {
    fetchCinemaByFilmStart,
    fetchCinemaByFilmSuccess,
    fetchCinemaByFilmFailure
} = cinemaByFilmSlice.actions
export default cinemaByFilmSlice.reducer