import React from "react";
import ReactDOM from "react-dom";

import { StylesProvider } from "@mui/styles";
import { Provider } from "react-redux";
import { applyMiddleware, compose } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import reducers from "./reducers";
import App from "./App";

const store = configureStore({
  reducers: reducers,
  middleware: [...getDefaultMiddleware(), thunk],
});

// const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <StylesProvider store={store}>
    <Provider>
      <App />
    </Provider>
  </StylesProvider>,
  document.getElementById("root")
);
