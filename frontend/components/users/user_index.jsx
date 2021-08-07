import React from "react";
import { Link } from "react-router-dom";

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
                    {/* user.email will be replaced with profile pic */}
                </ul>
            </div>
        );
    }
}

export default UserIndex;