import React from "react";
import ReactDOM from "react-dom";
import Root from "./root"

// for testing only
import * as SessionApiUtils from "./util/session_api_util";
// ^^^^^^^^^^^^^^^^

document.addEventListener("DOMContentLoaded", () => {

  // for testing only
  window.signup = SessionApiUtils.signup;
  window.signin = SessionApiUtils.signin;
  window.signout = SessionApiUtils.signout;
  // ^^^^^^^^^^^^^^^^

  ReactDOM.render(<Root />, document.getElementById("root"));
});