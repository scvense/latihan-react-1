import { createSlice } from '@reduxjs/toolkit'
import { loginThunk } from '../asyncThunk/login'

const initialState = {
    data: {},
    loading: false,
    error: false,
    errorDesc: "",
    isLogin: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        reset: (state, action) => {
            state.loading = false;
            state.data = {};
            state.error = false;
            state.errorDesc = "";
            state.isLogin = false;
        },
        updateDataFromLocalStorage: (state, action) => {
            state.data = action.payload;
            state.isLogin = true;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = false;
            state.errorDesc = action.payload.description;
            state.isLogin = true;
        })
        builder.addCase(loginThunk.rejected, (state, action) => {
            state.data = {};
            state.loading = false; 
            state.error = true;
            state.errorDesc = action.payload.description;
            state.isLogin = false
        })
    }
})

export const {reset, updateDataFromLocalStorage} = loginSlice.actions
export default loginSlice.reducer;