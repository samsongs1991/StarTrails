import React from "react";

class Profile extends React.Component {
    render() {
        const { user } = this.props;
        return (
            <div>
                <div>
                    <h3>Profile</h3>
                    <div>
                        <div>
                            {/* Profile pic */}
                            <p>Member Since</p>
                            <p></p>
                            {/* Member Since */}
                        </div>
                        <div>
                            <p>{user.first_name} {user.last_name}</p>
                            <p>{user.city}, {user.state}</p>
                            <p>About Me: {user.about_me}</p>
                            <p>Gender: {user.gender}</p>
                            <p>Birthdate: {user.bday}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Recent Activity</h3>
                    <p>Nothing here yet. To be filled in later</p>
                </div>
            </div>
        );
    }
}

export default Profile;