import React from "react";
import {Link} from "react-router-dom"

function SnackApple() {
    return <div>
        <h1>Apple!</h1>
        <Link to="/">Get another snack</Link>
    </div>
}

export default SnackApple;