import React from 'react';
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <ul className="nav nav-pills nav-fill">
            <li className="nav-item" >
                <NavLink
                    activeClassName="activetab"
                    to="/"
                    exact
                    className="navlink"
                >
                    <span>Tasks</span></NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    activeClassName="activetab"
                    exact
                    to="/done"
                    className="navlink"
                >
                    <span>Done Tasks</span></NavLink>
            </li>
        </ul>
    )
}
