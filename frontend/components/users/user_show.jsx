import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import ProfileContainer from "./user_show_tabs/profile_container";
import ListIndexContainer from "./user_show_tabs/list_index_container";
import Activities from "./user_show_tabs/activities";
import Reviews from "./user_show_tabs/reviews";
// import Photos from "./user_show_tabs/photos";
import SettingsContainer from "./user_show_tabs/settings_container";
import { ProtectedRoute } from "../../util/route_util";

class UserShow extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        return (
            <div className="user-show" >
                <div className="user-show-navbar" >
                    <ul>
                        <li><Link to={`/users/${this.props.userId}`} >Profile</Link></li>
                        <li><Link to={`/users/${this.props.userId}/lists`} >Lists</Link></li>
                        {/* <li><Link to={`/users/${this.props.userId}/activities`} >Activities</Link></li> */}
                        <li><Link to={`/users/${this.props.userId}/reviews`} >Reviews</Link></li>
                        {/* <li><Link to={`/users/${this.props.userId}/photos`} >Photos</Link></li> */}
                    </ul>
                </div>

                <Switch>
                    <Route exact path="/users/:userId" component={ProfileContainer} />
                    <Route path="/users/:userId/lists" component={ListIndexContainer} />
                    <Route path="/users/:userId/activities" component={Activities} />
                    <Route path="/users/:userId/reviews" component={Reviews} />
                    {/* <Route path="/users/:userId/photos" component={Photos} /> */}
                    <ProtectedRoute path="/users/:userId/settings" component={SettingsContainer} />
                </Switch>
            </div>
        );
    }
}

export default UserShow;