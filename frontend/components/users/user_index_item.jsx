import React from "react";
import { Link } from "react-router-dom";

const UserIndexItem = props => (
    <li>
        <Link to={`/users/${props.user.id}`} >
            {props.user.email}    
        </Link>
    </li>
    // email will be replaced by profile pic later
    // and will also become a Link to the user's show page 
)

export default UserIndexItem;