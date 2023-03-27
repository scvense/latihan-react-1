import { createAsyncThunk } from '@reduxjs/toolkit'
import {registerAPI} from '../../services/user'
import enums from '../../enum';

const registerThunk = createAsyncThunk(
    enums.thunkRegster,
    async (data, {rejectWithValue}) => {
        try{
            const response = await registerAPI(data)
            return response.data
        } catch(e) {
            return rejectWithValue(e.response.data);
        }
    }
);

export {registerThunk}