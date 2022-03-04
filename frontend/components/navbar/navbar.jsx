import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false };
        this.showFormModal = this.showFormModal.bind(this);
        this.hideFormModal = this.hideFormModal.bind(this);
        this.profileIconModal = this.profileIconModal.bind(this);
        this.handleImgClick = this.handleImgClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    showFormModal() {
        this.setState({ show: true });
    } 

    hideFormModal() {
        this.setState({ show: false });
    }

    handleImgClick() {
        if(this.state.show) {
            this.hideFormModal();
        } else {
            this.showFormModal();
        }
    }

    handleLogoutClick() {
        this.props.signout();
        this.hideFormModal();
    }

    navbarHeader = show => (
        <nav>
            <Link to="/trails" ><div>Explore</div></Link>
            <Link to="/" ><img src="images/StarTrailsLogo.png" alt="StarTrails logo" /></Link>
            { this.props.currentUser ? this.profileIcon(show) : this.sessionLinks() }
        </nav>
    )

    profileIconModal(show) {
        const { currentUser } = this.props;
        if(show) {
            return (
                <ul className="profile-icon-modal" >
                    <Link to={`/users/${currentUser.id}`} >Profile</Link>
                    {/* <Link to={`/users/${currentUser.id}/photos`} >Photos</Link> */}
                    {/* <Link to="/users" >Members</Link> */}
                    <Link to={`/users/${currentUser.id}/settings`} >Settings</Link>
                    <Link to="/" ><button onClick={this.handleLogoutClick} >Logout</button></Link>
                </ul>
            );
        } else {
            return null;
        }
    }

    profileIcon(show) {
        return (
            <div className="profile-icon" >
                <button onClick={this.handleImgClick} >
                    <img src="images/BlankProfilePic.png" alt="Profile picture" />
                </button>
                {this.profileIconModal(show)}
            </div>
        );
    }

    sessionLinks = () => (
        <ul className="session-links" >
            <Link to="/signup" >Sign Up</Link>
            <Link to="/signin" >Log In</Link> 
        </ul>
    )

    render() {
        return (
            this.navbarHeader(this.state.show)
        );
    }
    
}

export default Navbar;