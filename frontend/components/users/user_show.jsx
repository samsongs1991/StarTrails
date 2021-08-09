import React from "react";
// import { useParams } from "react-router-dom";

// props = fetchUser

class UserShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: 1
        }
    }

    componentDidMount() {
        this.props.fetchUser(this.state.userId);
    }

    render() {
        return (
            <div className="user-show" >
                USER SHOW IS WORKING
            </div>
        );
    }
}

export default UserShow;