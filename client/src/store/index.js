import { configureStore } from "@reduxjs/toolkit";
import persistedReducer from "./rootReducer";
import { persistStore } from "redux-persist";

/*https://stackoverflow.com/a/68509710/7857134 ---> serializableCheck: false */
export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
