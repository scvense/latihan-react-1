import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllDosen,
  insertDosen,
  deleteDosen,
  updateDosen,
} from "../../services/dosen";
import enums from "../../enum";

const getAllAsyncThunk = createAsyncThunk(
  enums.thunkGetAllDosen,
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllDosen();
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

const insertAsyncThunk = createAsyncThunk(
  enums.thunkInsertDosen,
  async (data, { rejectWithValue }) => {
    try {
      const response = await insertDosen(data);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

const deleteAsyncThunk = createAsyncThunk(
  enums.thunkDeleteDosen,
  async (id, { rejectWithValue }) => {
    try {
      const response = await deleteDosen(id);
      return { ...response.data, id };
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

const updateAsyncThunk = createAsyncThunk(
  enums.thunkUpdateDosen,
  async (data, { rejectWithValue }) => {
    try {
      const response = await updateDosen(data);
      return { ...response, data };
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export {
  getAllAsyncThunk,
  insertAsyncThunk,
  deleteAsyncThunk,
  updateAsyncThunk,
};
