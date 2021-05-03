import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./style.css";
import rootReducer from "./redux/rooterReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const localStore = createStore(rootReducer, composeWithDevTools);

ReactDOM.render(
  <Router>
    <Provider store={localStore}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
