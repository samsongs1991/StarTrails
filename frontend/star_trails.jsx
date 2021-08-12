import React from "react";
import ReactDOM from "react-dom";
import Root from "./root"
import configureStore from "./store/store";

// for testing only

// ^^^^^^^^^^^^^^^^


const bootstrapCurrentUser = () => {
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
  return store;
}


document.addEventListener("DOMContentLoaded", () => {
    let store = bootstrapCurrentUser();
    
    ReactDOM.render(<Root store={store} />, document.getElementById("root"));

    // for testing only
    window.store = store;
    window.dispatch = store.dispatch;
    // ^^^^^^^^^^^^^^^^

  });