import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import dataReducer from "./dataSlice";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

// Configure redux-persist
const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2, // Optional: Deep merging of state
};

// Combine the reducers
const rootReducer = combineReducers({
  data: dataReducer, // Add more reducers if needed
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store with the persisted reducer and middleware
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create the persistor for persisting the store
export const persistor = persistStore(store);

// Export the configured store
export default store;
