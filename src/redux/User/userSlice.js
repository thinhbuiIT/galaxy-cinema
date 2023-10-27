import { createSlice } from "@reduxjs/toolkit"
import createNotification from "../../utils/notifications"

const initialState = {
    user: {},
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart: (state, action) => {
            state.loading = true
            state.error = null
        },
        loginSuccess: (state, action) => {
            state.loading = false
            state.user = action.payload
        },
        loginFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        logout : (state, action) => {
            createNotification({type: 'success', message: 'Đăng xuất thành công'})
            return initialState
        }
    }
})

export const { 
    loginStart,
    loginSuccess,
    loginFailure
} = userSlice.actions
export default userSlice.reducer