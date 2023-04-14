import React from "react";
import Inventory from "./Inventory";


function addtolocal() {
    if (localStorage.getItem('inventory') === null) {
        localStorage.setItem('inventory', JSON.stringify(Inventory))
        window.dispatchEvent(new Event('inventory-add'));
    } else {
        console.log("inventory exists already, only update available")
    }
}

function Add() {

    return (
        <React.Fragment>
            <button onClick={addtolocal}>Add to storage</button>
        </React.Fragment>
    )

}

export default Add