import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [],
    loading: false,
    error: null
}

const filmSlice = createSlice({
    name: 'film',
    initialState,
    reducers: {
        fetchFilmStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchFilmSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchFilmError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const { fetchFilmStart, fetchFilmSuccess, fetchFilmError } = filmSlice.actions
export default filmSlice.reducer