import React, { useEffect, useState } from "react";
// import AccVal from "./AccVal";
import Add from "./Add";
import Log from "./Log";
import Clear from "./Clear";
import Modal from "./Modal";

function Header() {

    return (
        <div className="Header">
            {/**  <AccVal /> */}
            <Add />
            <Log />
            <Clear />
            <Modal />
        </div>
    )

}

export default Header