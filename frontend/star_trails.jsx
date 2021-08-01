import React from "react";
import ReactDOM from "react-dom";
import Root from "./root"

// for testing only
import * as SessionActions from "./actions/session_actions";
import configureStore from "./store/store";
// ^^^^^^^^^^^^^^^^

document.addEventListener("DOMContentLoaded", () => {

  // for testing only
  window.store = configureStore();
  window.signup = SessionActions.signup;
  window.signin = SessionActions.signin;
  window.signout = SessionActions.signout;
  // ^^^^^^^^^^^^^^^^

  ReactDOM.render(<Root />, document.getElementById("root"));
});