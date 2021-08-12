import React from "react";
import { Route, Switch } from "react-router-dom";
import UserIndex from "./user_index";
import UserShowContainer from "./user_show_container";

const Users = props => (
    <div>
        {/* Members > Samuel Song        <search bar> */}
        {/* ^ render users nav component */}
        
        <Switch>
            <Route exact path="/users" >
                <UserIndex fetchUsers={props.fetchUsers} users={props.users} />
            </Route>

            <Route path="/users/:userId" component={UserShowContainer} />
        </Switch>

        {/* all user show routes will be PROTECTED */}
    </div>
)

export default Users;
