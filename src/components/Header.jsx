import React, { useEffect, useState } from "react";
// import AccVal from "./AccVal";
import Add from "./Add";
import Log from "./Log";
import Clear from "./Clear";
import Update from "./Update";

function Header() {

    return (
        <div className="Header">
            {/**  <AccVal /> */}
            <Add />
            <Log />
            <Clear />
            <Update />
        </div>
    )

}

export default Header