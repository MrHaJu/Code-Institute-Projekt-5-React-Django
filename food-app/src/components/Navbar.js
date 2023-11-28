import React from "react";
import { useState } from "react";
import Sidebar from "./sidebar";
import {faHome, faList, faCog, faUser, faSignIn} from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false);
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Login",
            path: "/login",
            icon: faUser
        },
        {
            name: "Register",
            path: "/register",
            icon: faSignIn
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        }
    ]

    function closeSidebar(){
        setShowSidebar(false);
    }

    return (
    <>
        <div className="navbar container">
            <a href="#!" className="logo">
                Mr.HaJu's <span>Recipes</span> sharing
            </a>
            <div className="nav-links">
                {links.map(link => (
                    <a href="#!"/*{link.path}*/ key={link.name}>{link.name}</a>
                ))}
                
            </div>
            <div
                onClick={() => setShowSidebar(!showSidebar)}
                className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}
            >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
        { showSidebar && <Sidebar close={closeSidebar} links={links} /> }
    </>
    );
}
