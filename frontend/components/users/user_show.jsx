import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Profile from "./user_show_tabs/profile";
import Lists from "./user_show_tabs/lists";
import Activities from "./user_show_tabs/activities";
import Reviews from "./user_show_tabs/reviews";
import Photos from "./user_show_tabs/photos";
import Settings from "./user_show_tabs/settings";


class UserShow extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        return (
            <div className="user-show" >
                <ul>
                    <li><Link to={`/users/${this.props.userId}`} >Profile</Link></li>
                    <li><Link to={`/users/${this.props.userId}/lists`} >Lists</Link></li>
                    <li><Link to={`/users/${this.props.userId}/activities`} >Activities</Link></li>
                    <li><Link to={`/users/${this.props.userId}/reviews`} >Reviews</Link></li>
                    <li><Link to={`/users/${this.props.userId}/photos`} >Photos</Link></li>
                </ul>

                <Switch>
                    <Route exact path={`/users/${this.props.userId}`} component={Profile} />
                    <Route exact path={`/users/${this.props.userId}/lists`} component={Lists} />
                    <Route path={`/users/${this.props.userId}/activities`} component={Activities} />
                    <Route path={`/users/${this.props.userId}/reviews`} component={Reviews} />
                    <Route path={`/users/${this.props.userId}/photos`} component={Photos} />
                    <Route path={`/users/${this.props.userId}/settings`} component={Settings} />
                    {/* Above route for settings will be PROTECTED */}
                </Switch>
            </div>
        );
    }
}

export default UserShow;