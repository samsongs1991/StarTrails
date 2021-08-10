import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import ProfileContainer from "./user_show_tabs/profile_container";
import ListsContainer from "./user_show_tabs/lists_container";
import Activities from "./user_show_tabs/activities";
import Reviews from "./user_show_tabs/reviews";
import Photos from "./user_show_tabs/photos";
import SettingsContainer from "./user_show_tabs/settings_container";

class UserShow extends React.Component {
    // componentDidMount() {
    //     this.props.fetchUser(this.props.userId);
    // }
    // how i currently have it set up, the only way to access another user's 
    // show page is through the members tab which fetches all the users upon mounting
    // i will refactor my code so that fetchUsers fetches ALL user details from the DB
    // and not just id and email

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
                    <Route exact path="/users/:userId" component={ProfileContainer} />
                    <Route path="/users/:userId/lists" component={ListsContainer} />
                    <Route path="/users/:userId/activities" component={Activities} />
                    <Route path="/users/:userId/reviews" component={Reviews} />
                    <Route path="/users/:userId/photos" component={Photos} />
                    <Route path="/users/:userId/settings" component={SettingsContainer} />
                    {/* Above route for settings will be PROTECTED */}
                </Switch>
            </div>
        );
    }
}

export default UserShow;