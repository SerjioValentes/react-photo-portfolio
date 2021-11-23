import React from "react";
import "../styles/home.css";
import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <nav className="navBar">

            <div className="navBar__item">
                <NavLink to="/">
                    <a href="HomePage" className="classA">Home</a>
                </NavLink>
            </div>

            <div className="navBar__item">
                <NavLink className="hrefAText" to="/PortraitPage">
                    <a className="classA" href="PortraitPage">Portraits</a>
                </NavLink>
            </div>

            <div className="navBar__item">
                <NavLink className="hrefAText" to="/LovePage">
                    <a className="classA" href="LovePage">Love</a>
                </NavLink>
            </div>

            <div className="navBar__item">
                <NavLink className="hrefAText" to="/NaturePage">
                    <a className="classA" href="NaturePage">Nature</a>
                </NavLink>
            </div>

            <div className="navBar__item">
                <NavLink className="hrefAText" to="/Rendered">
                    <a className="classA" href="Rendered">Content</a>
                </NavLink>
            </div>

            <div className="navBar__item">
                <NavLink className="hrefAText" to="/ContactPage">
                    <a className="classA" href="ContactPage">Contacts</a>
                </NavLink>
            </div>

        </nav>
    )
}

export default NavBar;
