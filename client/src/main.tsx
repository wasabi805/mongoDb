import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";

import { AppRouter } from "./router";
import { store, persistor } from "./store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>,
);
