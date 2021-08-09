import React from "react";
import { Route } from "react-router-dom";

import NavbarContainer from "./components/navbar/navbar_container";
import SignupFormContainer from "./components/session_form/signup_form_container";
import SigninFormContainer from "./components/session_form/signin_form_container";
import { AuthRoute } from "./util/route_util";
// import TrailIndexContainer from "./components/trails/trail_index_container";
import SearchContainer from "./components/search_map/search_container";


// TEST CODE ----------------------------------------
import UserContainer from "./components/users/user_container";
// --------------------------------------------------


const App = () => (
    <div>
        <header>
            <NavbarContainer />
        </header>
        
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute path="/signin" component={SigninFormContainer} />


        {/* // TEST CODE ---------------------------------------- */}
        <Route path="/users" component={UserContainer} />
        {/* <ProtectedRoute path="/users" component={UsersContainer} /> */}
        {/* ABOVE PAGE = show all users (users index page) */}
        {/* must be signed in to view all users */}
        {/* // -------------------------------------------------- */}


        <Route path="/trails" component={SearchContainer} />

    </div>
)

export default App;