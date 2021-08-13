import React from "react";
import { Route } from "react-router-dom";

import NavbarContainer from "./components/navbar/navbar_container";
import SignupFormContainer from "./components/session_form/signup_form_container";
import SigninFormContainer from "./components/session_form/signin_form_container";
import { AuthRoute, ProtectedRoute } from "./util/route_util";
import SearchContainer from "./components/search_map/search_container";
import UserContainer from "./components/users/user_container";
import TrailShowContainer from "./components/trails/trail_show_container";
import Home from "./components/home/home";

// TEST CODE ----------------------------------------
// --------------------------------------------------


const App = () => (
    <div>
        <header>
            <NavbarContainer />
        </header>
        
        <Route exact path="/" component={Home}/>

        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute path="/signin" component={SigninFormContainer} />

        <ProtectedRoute path="/users" component={UserContainer} />

        <Route exact path="/trails" component={SearchContainer} />

        <Route path="/trails/:trailId" component={TrailShowContainer} />      

        {/* // TEST CODE ---------------------------------------- */}

        {/* // -------------------------------------------------- */}
    </div>
)

export default App;