import React from "react";
import {NavLink} from "react-router-dom"

function Navbar() {
    return <div className="Navbar">
        <NavLink to="/">VendingMachine</NavLink>
        <NavLink to="/apple">Apple</NavLink>
        <NavLink to="/zebracakes">Zebra Cakes</NavLink>
        <NavLink to="/barebells">Barebells</NavLink>
    </div>
}

export default Navbar;