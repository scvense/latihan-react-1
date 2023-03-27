import { createSlice } from "@reduxjs/toolkit";
import {
  getAllAsyncThunk,
  insertAsyncThunk,
  deleteAsyncThunk,
  updateAsyncThunk,
} from "../asyncThunk/dosen";

const initialState = {
  // get all dosen
  dosen: [],
  loading: false,
  error: false,
  errorDesc: "",

  // state insert
  loadingInsert: false,
  errorInsert: false,
  errorDescInsert: "",
  isInsert: false,

  // state delete
  loadingDelete: false,
  errorDelete: false,
  errorDescDelete: "",

  // state update
  data: {},
  loadingUpdate: false,
  errorUpdate: false,
  errorDescUpdate: "",
  isUpdate: false,
};

const dosenSlice = createSlice({
  name: "dosen",
  initialState,
  reducers: {
    reset: (state, action) => {
      state.loadingInsert = false;
      state.errorInsert = false;
      state.errorDescInsert = false;
      state.isInsert = false;
    },
  },
  extraReducers: (builder) => {
    // Builder getAll
    builder.addCase(getAllAsyncThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllAsyncThunk.fulfilled, (state, action) => {
      state.dosen = action.payload;
      state.loading = false;
    });
    builder.addCase(getAllAsyncThunk.rejected, (state, action) => {
      state.dosen = [];
      state.loading = false;
      state.error = true;
      state.errorDesc = action.payload.description;
    });

    // Builder insert
    builder.addCase(insertAsyncThunk.pending, (state, action) => {
      state.loadingInsert = true;
    });
    builder.addCase(insertAsyncThunk.fulfilled, (state, action) => {
      state.dosen = [...state.dosen, action.payload];
      state.loadingInsert = false;
    });
    builder.addCase(insertAsyncThunk.rejected, (state, action) => {
      state.dosen = [];
      state.loadingInsert = false;
      state.errorInsert = true;
      state.errorDescInsert = action.payload.description;
    });

    // Builder Delete
    builder.addCase(deleteAsyncThunk.pending, (state, action) => {
      state.loadingDelete = true;
    });
    builder.addCase(deleteAsyncThunk.fulfilled, (state, action) => {
      state.dosen = state.dosen.filter(
        (item) => item.id_dosen !== action.payload.id
      );
      state.loadingDelete = false;
    });
    builder.addCase(deleteAsyncThunk.rejected, (state, action) => {
      state.dosen = [];
      state.loadingDelete = false;
      state.errorDelete = true;
      state.errorDescDelete = action.payload.description;
    });

    // Builder Update
    builder.addCase(updateAsyncThunk.pending, (state, action) => {
      state.loadingUpdate = true;
    });
    builder.addCase(updateAsyncThunk.fulfilled, (state, action) => {
      state.dosen = state.dosen.map((item) => {
        if (item.id_dosen === action.payload.id) {
          return action.payload.data;
        }
        return item;
      });
      state.loadingUpdate = false;
    });
    builder.addCase(updateAsyncThunk.rejected, (state, action) => {
      state.dosen = [];
      state.loadingUpdate = false;
      state.errorUpdate = true;
      state.errorDescUpdate = action.payload.description;
    });
  },
});

export const { reset } = dosenSlice.actions;
export default dosenSlice.reducer;
