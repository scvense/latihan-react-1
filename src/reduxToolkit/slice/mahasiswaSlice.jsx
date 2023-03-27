import { createSlice } from "@reduxjs/toolkit";
import {
  getAllAsyncThunk,
  insertAsyncThunk,
  deleteAsyncThunk,
  updateAsyncThunk,
} from "../asyncThunk/mahasiswa";

const initialState = {
  //ini untuk get all users
  users: [],
  loading: false,
  error: false,
  errorDesc: "",

  // ini untuk insert users
  loadingInsert: false,
  errorInsert: false,
  errorDescInsert: "",
  isInsert: false,

  // ini untuk delete users
  loadingDelete: false,
  errorDelete: false,
  errorDescDelete: "",

  // ini untuk update users
  data: {},
  loadingUpdate: false,
  errorUpdate: false,
  errorDescUpdate: "",
};

const mahasiswaSlice = createSlice({
  name: "users",
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
    // BUILDER UNTUK GETALL
    // API sedang diakses (proses request)
    builder.addCase(getAllAsyncThunk.pending, (state, action) => {
      state.loading = true;
    });
    //selesai loading / API sudah didapat
    builder.addCase(getAllAsyncThunk.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    });
    // jika error
    builder.addCase(getAllAsyncThunk.rejected, (state, action) => {
      state.users = [];
      state.loading = false;
      state.error = true;
      state.errorDesc = action.payload.description;
    });

    // BUILDER UNTUK INSERT
    builder.addCase(insertAsyncThunk.pending, (state, action) => {
      state.loadingInsert = true;
    });
    builder.addCase(insertAsyncThunk.fulfilled, (state, action) => {
      //ini udah pasti response http 2xx
      state.users = [...state.users, action.payload];
      state.loadingInsert = false;
    });
    builder.addCase(insertAsyncThunk.rejected, (state, action) => {
      state.users = [];
      state.loadingInsert = false;
      state.errorInsert = true;
      state.errorDescInsert = action.payload.description;
    });

    //BUILDER UNTUK DELETE
    builder.addCase(deleteAsyncThunk.pending, (state, action) => {
      state.loadingDelete = true;
    });
    builder.addCase(deleteAsyncThunk.fulfilled, (state, action) => {
      state.users = state.users.filter((item) => item.id !== action.payload.id);
      state.loadingDelete = false;
    });
    builder.addCase(deleteAsyncThunk.rejected, (state, action) => {
      state.users = [];
      state.loadingDelete = false;
      state.errorDelete = true;
      state.errorDescDelete = action.payload.description;
    });

    // BUILDER UNTUK UPDATE
    builder.addCase(updateAsyncThunk.pending, (state, action) => {
      state.loadingUpdate = true;
    });
    builder.addCase(updateAsyncThunk.fulfilled, (state, action) => {
      state.users = state.users.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload.data;
        }
        return item;
      });
      state.loadingUpdate = false;
    });
    builder.addCase(updateAsyncThunk.rejected, (state, action) => {
      state.loadingUpdate = false;
      state.errorUpdate = true;
      state.errorDescUpdate = action.payload.desc;
      // state.errorDescUpdate = action.payload.description;
    });
  },
});

export const { reset } = mahasiswaSlice.actions;
export default mahasiswaSlice.reducer;
