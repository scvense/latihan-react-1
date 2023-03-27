import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllMahasiswa,
  insertMahasiswa,
  deleteMahasiswa,
  updateMahasiswa,
} from "../../services/user";
import enums from "../../enum";

const getAllAsyncThunk = createAsyncThunk(
  enums.thunkGetAllMahasiswa,
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllMahasiswa();
      return response.data;
    } catch (e) {
      //ini menampung semua response http
      return rejectWithValue(e.response.data);
    }
  }
);

const insertAsyncThunk = createAsyncThunk(
  enums.thunkInsertMahasiswa,
  async (data, { rejectWithValue }) => {
    try {
      const response = await insertMahasiswa(data);
      return response.data; //ini akan di kerjakan jika status http dari axios 200/2xx
    } catch (e) {
      //ini akan di kerjakan jika status http request selain 2xx, misal 4xx, 5xx
      return rejectWithValue(e.response.data);
    }
  }
);

const deleteAsyncThunk = createAsyncThunk(
  enums.thunkDeleteMahasiswa,
  async (id, { rejectWithValue }) => {
    try {
      const response = await deleteMahasiswa(id);
      return { ...response.data, id };
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

const updateAsyncThunk = createAsyncThunk(
  enums.thunkUpdateMahasiswa,
  async (data, { rejectWithValue }) => {
    try {
      const response = await updateMahasiswa(data);
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
