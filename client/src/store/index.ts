import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import persistedReducer from "./rootReducer";
import { persistStore } from "redux-persist";
export type RootState = ReturnType<typeof store.getState>;

/*https://stackoverflow.com/a/68509710/7857134 ---> serializableCheck: false */
export const store = configureStore({
  // reducer: rootReducer,
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const persistor = persistStore(store);
