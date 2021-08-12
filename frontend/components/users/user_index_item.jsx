import React from "react";
import { Link } from "react-router-dom";

const UserIndexItem = props => (
    <li>
        <Link to={`/users/${props.user.id}`} >
            {props.user.email}    
        </Link>
    </li>
    // email will be replaced by profile pic later
)

export default UserIndexItem;