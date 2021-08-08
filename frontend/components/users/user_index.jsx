import React from "react";
import { Link } from "react-router-dom";
import UserIndexItem from "./user_index_item";

class UserIndex extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        return (
            <div>
                <div>
                    <h3>Members</h3>
                    {/* search bar for member names */}
                </div>
                <ul>
                    {Object.values(this.props.users).map(user => (
                        <UserIndexItem key={user.id} user={user} />
                    ))}
                    {/* need to make each user index item a link to a show page route */}
                </ul>
            </div>
        );
    }
}

export default UserIndex;