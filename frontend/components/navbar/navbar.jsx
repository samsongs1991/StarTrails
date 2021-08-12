import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ currentUser, signout }) => { 

    const navbarHeader = () => (
        <nav>
            <Link to="/trails" ><div>Explore</div></Link>
            <Link to="/" ><img src="images/StarTrailsLogo.png" alt="StarTrails logo" /></Link>
            { currentUser ? profileIcon() : sessionLinks() }
        </nav>
    )

    const profileIcon = () => (
        <div className="profile-icon" >
            <img src="images/BlankProfilePic.png" alt="Profile picture" />
            {/* ^^^ image above will by default show a blank profile pic until i get the AWS to work */}
            {/* ^^^ below list will be hidden until above profile pic is clicked */}
            {/* ^^^ when profile pic is clicked, a drop down menu will appear with the below list */}
            <ul>
                <li><Link to={`/users/${currentUser.id}`} >Profile</Link></li>
                <li><Link to={`/users/${currentUser.id}/photos`} >Photos</Link></li>
                <li><Link to="/users" >Members</Link></li>
                <li><Link to={`/users/${currentUser.id}/settings`} >Settings</Link></li>
                <li><Link to="/" ><button onClick={() => signout()} >Logout</button></Link></li>
            </ul>
        </div>
    )

    const sessionLinks = () => (
        <ul className="session-links" >
            <li><Link to="/signup" >Sign Up</Link></li>
            <li><Link to="/signin" >Log In</Link></li>
        </ul>
    )

    return navbarHeader();
}

export default Navbar;