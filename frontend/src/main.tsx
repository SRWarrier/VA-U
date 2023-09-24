import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/store.tsx";
import { navlinks } from "./routes/RootRoutes.tsx";
import { App } from "antd";

const router = createBrowserRouter(navlinks);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App>
          <RouterProvider router={router} />
        </App>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
