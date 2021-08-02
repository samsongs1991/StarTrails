import React from "react";
import ReactDOM from "react-dom";
import Root from "./root"
import configureStore from "./store/store";

// for testing only
import * as SessionActions from "./actions/session_actions";
// ^^^^^^^^^^^^^^^^

document.addEventListener("DOMContentLoaded", () => {

  // for testing only
  window.store = configureStore();
  window.signup = SessionActions.signup;
  window.signin = SessionActions.signin;
  window.signout = SessionActions.signout;
  // ^^^^^^^^^^^^^^^^

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }, 
      session: { currentUserId: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  ReactDOM.render(<Root store={store} />, document.getElementById("root"));
});