import React from 'react';

export default function Navbar(){
    return (
        <div className="navbar container">
            <a href="#!" className="logo">Mr.HaJu's <span>Recipes</span> sharing</a>
            <div className="nav-links">
                <a href="#!">Home</a>
                <a href="#!">Recipes</a>
                <a href="#!">Login</a>
                <a href="#!">Register</a>
                <a href="#!">Settings</a>
            </div>
        </div>
    )
}