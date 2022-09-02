import React, { Component } from "react"
import './styles/navbar.css'

function Navbar(props) {
    return (
        <nav className="navigation">
            <a href="/" className="brand-name">
                Logo
            </a>

            <div
                className="navigation-menu">
                <ul>
                    <li>
                        <a href="/contact">User{props.name}</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar