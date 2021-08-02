import React from "react";
import { Route } from "react-router-dom";

import NavbarContainer from "./components/navbar/navbar_container";
import SignupFormContainer from "./components/session_form/signup_form_container";
import SigninFormContainer from "./components/session_form/signin_form_container";

const App = () => (
    <div>
        <header>
            <NavbarContainer />
        </header>

        <Route path="/signup" component={SignupFormContainer} ></Route>
        <Route path="/signin" component={SigninFormContainer} ></Route>
    </div>
)

export default App;