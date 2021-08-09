import React from "react";
// import { useParams } from "react-router-dom";

// props = fetchUser

class UserShow extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        return (
            <div className="user-show" >
                <div>
                    {/* Members > Samuel Song */}
                </div>
                
            </div>
        );
    }
}

export default UserShow;