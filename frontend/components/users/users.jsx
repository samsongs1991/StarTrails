import React from "react";
import { Link } from "react-router-dom";
import UserIndex from "./user_index";

const Users = props => (
    <div>
        {/* Members > Samuel Song        <search bar> */}
        {/* ^ render users nav component */}
        
        <UserIndex fetchUsers={props.fetchUsers} users={props.users} />
        {/* render users index component*/}
        
        {/* render user show component */}
        {/* user show component will contain the profile, lists, etc components */}

        {/* the above 2 components can't be rendered at same time */}
    </div>
)

export default Users;
