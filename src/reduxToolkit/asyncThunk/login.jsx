import { createAsyncThunk } from '@reduxjs/toolkit'
import {loginAPI} from '../../services/user'
import enums from '../../enum';

const loginThunk = createAsyncThunk(
    enums.thunkLogin, 
    async (data, { rejectWithValue }) => {
    try {
        const response = await loginAPI(data)
        return response.data
    } catch(e) {
        return rejectWithValue(e.response.data);
    }
}) 

export { loginThunk }