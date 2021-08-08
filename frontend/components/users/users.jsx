import React from "react";
import { Route, Link } from "react-router-dom";
import UserIndex from "./user_index";
import UserShow from "./user_show";

const Users = props => (
    <div>
        {/* Members > Samuel Song        <search bar> */}
        {/* ^ render users nav component */}
        
        <Route exact path="/users" >
            <UserIndex fetchUsers={props.fetchUsers} users={props.users} />
        </Route>
        {/* render users index component*/}
        
        <Route path="/users" >
        {/* <Route path="/users/:userId" > ISN'T WORKING! */}
            <div>USER SHOW ROUTE HERE</div>
            <UserShow fetchUser={props.fetchUser} />
        </Route>
        {/* render user show component */}
        {/* user show component will contain the profile, lists, etc components */}

        {/* the above 2 components can't be rendered at same time */}
    </div>
)

export default Users;
