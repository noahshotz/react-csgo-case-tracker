import React from "react";
import Inventory from "./Inventory";


function getfromlocal() {
    localStorage.setItem('inventory', JSON.stringify(Inventory))
    window.dispatchEvent(new Event('inventory-add'));
    console.log("Added to storage:")
    console.log(JSON.parse(localStorage.getItem('inventory')))
}

function Add() {

    return (
        <React.Fragment>
            <button onClick={getfromlocal}>Add to storage</button>
        </React.Fragment>
    )

}

export default Add