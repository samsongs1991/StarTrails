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

    navbarHeader = show => (
        <nav>
            <Link to="/trails" ><div>Explore</div></Link>
            <Link to="/" ><img src="images/StarTrailsLogo.png" alt="StarTrails logo" /></Link>
            { this.props.currentUser ? this.profileIcon(show) : this.sessionLinks() }
        </nav>
    )

    profileIconModal(show) {
        const { currentUser, signout } = this.props;
        if(show) {
            return (
                <ul>
                    <li><Link to={`/users/${currentUser.id}`} >Profile</Link></li>
                    <li><Link to={`/users/${currentUser.id}/photos`} >Photos</Link></li>
                    <li><Link to="/users" >Members</Link></li>
                    <li><Link to={`/users/${currentUser.id}/settings`} >Settings</Link></li>
                    <li><Link to="/" ><button onClick={() => signout()} >Logout</button></Link></li>
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
                {/* ^^^ image above will by default show a blank profile pic until i get the AWS to work */}
                {/* <ul>
                    <li><Link to={`/users/${currentUser.id}`} >Profile</Link></li>
                    <li><Link to={`/users/${currentUser.id}/photos`} >Photos</Link></li>
                    <li><Link to="/users" >Members</Link></li>
                    <li><Link to={`/users/${currentUser.id}/settings`} >Settings</Link></li>
                    <li><Link to="/" ><button onClick={() => signout()} >Logout</button></Link></li>
                </ul> */}
                {this.profileIconModal(show)}
                {/* above ul will be a MODAL */}
            </div>
        );
    }

    sessionLinks = () => (
        <ul className="session-links" >
            <li><Link to="/signup" >Sign Up</Link></li>
            <li><Link to="/signin" >Log In</Link></li>
        </ul>
    )

    render() {
        return (
            this.navbarHeader(this.state.show)
        );
    }
    
}

export default Navbar;