import React from "react";

function getfromlocal() {
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
            <button onClick={getfromlocal}>Log storage</button>
        </React.Fragment>
    )

}

export default Log