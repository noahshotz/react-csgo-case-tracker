import React from "react";
import Inventory from "./Inventory";


function addtolocal() {
    localStorage.setItem('inventory', JSON.stringify(Inventory))
    window.dispatchEvent(new Event('inventory-add'));
    console.log("Added to storage:")
    console.log(JSON.parse(localStorage.getItem('inventory')))
}

function Add() {

    return (
        <React.Fragment>
            <button onClick={addtolocal}>Add to storage</button>
        </React.Fragment>
    )

}

export default Add