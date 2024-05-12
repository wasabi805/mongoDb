import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";

import { AppRouter } from "./router";
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import AppLayout from "./common/_AppWrapper";
import AppThemeProvider from "./common/styled";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppThemeProvider>
        <AppLayout>
          <AppRouter />
        </AppLayout>
      </AppThemeProvider>
    </PersistGate>
  </Provider>
);
