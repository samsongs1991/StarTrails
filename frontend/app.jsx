import React from "react";
import { Route } from "react-router-dom";

import NavbarContainer from "./components/navbar/navbar_container";
import SignupFormContainer from "./components/session_form/signup_form_container";
import SigninFormContainer from "./components/session_form/signin_form_container";
import { AuthRoute } from "./util/route_util";

const App = () => (
    <div>
        <header>
            <NavbarContainer />
        </header>
        
        <AuthRoute path="/signup" component={SignupFormContainer} ></AuthRoute>
        <AuthRoute path="/signin" component={SigninFormContainer} ></AuthRoute>

        {/* Render a google map route */}

    </div>
)

export default App;