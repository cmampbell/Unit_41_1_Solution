import React from "react";
import {Link} from "react-router-dom"

function VendingMachine() {
    return <div>
        <h1>Vending Machine!</h1>
        <Link to="/apple">Apple</Link>
        <Link to="/zebracakes">Zebra Cakes</Link>
        <Link to="/barebells">Barebells</Link>
    </div>
}

export default VendingMachine;