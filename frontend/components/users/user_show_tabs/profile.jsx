import React from "react";

class Profile extends React.Component {
    convertDate(date) {
        let yr = date.slice(0, 4);
        let mo = date.slice(5, 7);
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return `${months[parseInt(mo) + 1]} ${yr}`;
    }

    convertLocation(city, state) {
        if((city === null && state === null) || (city === "" && state === "")) {
            return "";
        } else if(city === null || city === "") {
            return state;
        } else if(state === null || state === "") {
            return city;
        } else {
            return `${city}, ${state}`;
        }
    }

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
                            <p>{this.convertDate(user.created_at)}</p>
                        </div>
                        <div>
                            <p>{user.first_name} {user.last_name}</p>
                            <p>{this.convertLocation(user.city, user.state)}</p>
                            <p>About Me: {user.about_me}</p>
                            <p>Gender: {user.gender.toLowerCase()}</p>
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