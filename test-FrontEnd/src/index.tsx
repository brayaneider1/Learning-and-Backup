import initStore from "./store/Store";
import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/main.css";
import "./assets/css/vendors/main.css";

import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { ConnectedRouter } from "connected-react-router";
import { App } from "./assets/views/app/App";
export const history = createBrowserHistory();
export const store = initStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
