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
                {/* ^^^ Profile link will render user show page and go to the profile tab --> rendering user info */}
                <li><Link to="" >Reviews</Link></li>
                {/* ^^^ Reviews link will render user show page and go to the reviews tab */}
                <li><Link to="" >Photos</Link></li>
                {/* ^^^ Photos link will render user show page and go to the photos tab */}
                <li><Link to="/users" >Members</Link></li>
                {/* ^^^ Members link will render index page showing all members */}
                <li><Link to="" >Settings</Link></li>
                {/* ^^^ Settings link will render user show page and go to the profile tab --> rendering edit profile form */}
                <li><Link to="/" ><button onClick={() => signout()} >Logout</button></Link></li>
                {/* ^^^ Logout button will trigger signout onClick and reroute to home page */}
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