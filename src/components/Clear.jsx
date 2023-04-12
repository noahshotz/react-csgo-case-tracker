import React from "react";

function clearfromlocal() {
    localStorage.removeItem('inventory')
    window.dispatchEvent(new Event('inventory-clear'))
    console.log("inventory from localstorage has been removed")
}

function Clear() {

    return (
        <React.Fragment>
            <button onClick={clearfromlocal}>Clear storage</button>
        </React.Fragment>
    )

}

export default Clear