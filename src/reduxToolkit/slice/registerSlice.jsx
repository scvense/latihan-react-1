import { createSlice } from '@reduxjs/toolkit'
import { registerThunk } from '../asyncThunk/register'

const initialState = {
    data: {},
    loading: false,
    error: false,
    errorDesc: "",
    isRegister: false
}

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        reset: (state, action) => {
            state.loading = false;
            state.data = {};
            state.error = false;
            state.errorDesc = "";
            state.isLogin = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(registerThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(registerThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = false;
            state.errorDesc = action.payload.description;
            state.isRegister = true;
        })
        builder.addCase(registerThunk.rejected, (state, action) => {
            state.data = {};
            state.loading = false;  
            state.error = true;
            state.errorDesc = action.payload.description;
            state.isRegister = false
        })
    }
})


export const {reset} = registerSlice.actions
export default registerSlice.reducer;