import { configureStore } from "@reduxjs/toolkit";

import { userApis } from "./slices/userSlice";
import rootReducer from "./rootReducer";

/*https://stackoverflow.com/a/68509710/7857134 ---> serializableCheck: false */
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
