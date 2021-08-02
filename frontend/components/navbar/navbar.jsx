import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ currentUser, signout }) => { 

    const navbarHeader = () => (
        // Explore - Plan - History - All Trails Logo - (profileIcon OR sessionLinks)
        <nav>
            <ul>
                <li>Explore</li>
                <li>Plan</li>
                <li>History</li>
            </ul>
            <img src="images/StarTrailsLogo.png" alt="StarTrails logo" />
            { currentUser ? profileIcon() : sessionLinks() }
        </nav>
    )

    const profileIcon = () => (
        <div>
            <img src="images/BlankProfilePic.png" alt="Profile picture" />
            {/* ^^^ image above will by default show a blank profile pic until i get the AWS to work */}
            <ul>
                <li><Link to="" >Profile</Link></li>
                {/* ^^^ Profile link will render user show page and go to the profile tab --> rendering user info */}
                <li><Link to="" >Reviews</Link></li>
                {/* ^^^ Reviews link will render user show page and go to the reviews tab */}
                <li><Link to="" >Photos</Link></li>
                {/* ^^^ Photos link will render user show page and go to the photos tab */}
                <li><Link to="" >Members</Link></li>
                {/* ^^^ Members link will render index page showing all members */}
                <li><Link to="" >Settings</Link></li>
                {/* ^^^ Settings link will render user show page and go to the profile tab --> rendering edit profile form */}
                <li><button onClick={() => signout()} >Logout</button></li>
                {/* ^^^ Logout button will trigger signout onClick and reroute to home page */}
            </ul>
        </div>
    )

    const sessionLinks = () => (
        <ul>
            <li><Link to="/signup" >Sign Up</Link></li>
            {/* Route with path /signup will render a signup page */}
            <li><Link to="/signin" >Log In</Link></li>
            {/* Route with path /signin will render a signup page */}
        </ul>
    )

    return navbarHeader();
}

export default Navbar;