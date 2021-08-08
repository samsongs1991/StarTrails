import React from "react";
// import { useParams } from "react-router-dom";

// props = fetchUser

class UserShow extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         userId: this.userIdFromParams()
    //         userId: props.match.params.userId
    //     }
    // }

    // userIdFromParams() {
    //     let { userId } = useParams();
    //     return userId;
    // }

    // componentDidMount() {
    //     console.log("COMPONENT IS MOUNTING?");
    //     this.props.fetchUser(this.state.userId);
    // }

    render() {
        return (
            <div>
                USER SHOW IS WORKING
                {console.log("USER SHOW IS WORKING")}
            </div>
        );
    }
}

export default UserShow;