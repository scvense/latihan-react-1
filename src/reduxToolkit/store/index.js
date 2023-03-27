import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import countReducer from "../slice/counterSlice";
import loginReducer from "../slice/loginSlice";
import registerReducer from "../slice/registerSlice";
import userReducer from "../slice/mahasiswaSlice";
import dosenReducer from "../slice/dosenSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, loginReducer);

export const store = configureStore({
  reducer: {
    counter: countReducer,
    login: persistedReducer,
    register: registerReducer,
    mahasiswa: userReducer,
    dosen: dosenReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
