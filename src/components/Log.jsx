import React from "react";

function logfromlocal() {
    if (JSON.parse(localStorage.getItem('inventory')) !== null) {
        console.log("Current storage:")
        console.log(JSON.parse(localStorage.getItem('inventory')))
    } else {
        console.log("Local storage empty")
    }
}

function Log() {

    return (
        <React.Fragment>
            <button onClick={logfromlocal}>Log to console</button>
        </React.Fragment>
    )

}

export default Log