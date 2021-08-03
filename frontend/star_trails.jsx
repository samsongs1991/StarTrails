import React from "react";
import ReactDOM from "react-dom";
import Root from "./root"
import configureStore from "./store/store";

// for testing only
import * as SessionActions from "./actions/session_actions";
import { fetchTrails, fetchTrail, createTrail } from "./util/trail_api_util"; 
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
    window.dummyTrail = {
      name: "TEST", 
      latitude: 1.11, 
      longitude: 1.11, 
      location: "TEST", 
      city: "TEST", 
      state: "TEST", 
      country: "TEST", 
      difficulty: "easy", 
      description: "TEST", 
      length: 1.11, 
      gain: 111, 
      category: "TEST", 
      directions: "TEST"
    }
    window.fetchTrails = fetchTrails;
    window.fetchTrail = fetchTrail;
    window.createTrail = createTrail;
    // ^^^^^^^^^^^^^^^^

    
  });