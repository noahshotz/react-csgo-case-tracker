import React, { useEffect, useState } from "react";
// import AccVal from "./AccVal";
import Add from "./Add";
import Log from "./Log";
import Clear from "./Clear";

function Header() {

    return (
        <div className="Header">
            {/**  <AccVal /> */}
            <Add />
            <Log />
            <Clear />
        </div>
    )

}

export default Header