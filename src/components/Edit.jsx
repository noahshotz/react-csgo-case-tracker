import React from "react";
import Popup from 'reactjs-popup';

const addToInventory = () => {

}

const deleteEntry = (myKey) => {

    console.log(myKey);

    // get localstorage 'inventory' & parse into object
    let inventory = JSON.parse(localStorage.getItem('inventory'))

    // delete 'inventory'.entry
    delete inventory[myKey]

    // delete current localstorage
    localStorage.removeItem('inventory')

    const objectLength = Object.keys(inventory).length;
    console.log("Object length: ", objectLength);

    if (objectLength > 0) {
        // push new localstorage
        localStorage.setItem('inventory', JSON.stringify(inventory))
        window.dispatchEvent(new Event('inventory-update'));
    } else {
        window.dispatchEvent(new Event('inventory-clear'));
    }

}

function Edit ({myKey, name, quantity, market_hash_name, steam_url, buff_url}) {

    return (
        <React.Fragment>
            <Popup trigger={<button> Edit</button>} modal lockScroll>
            <div className="modal-group">
                <div className="modal-container">
                    <h2>
                        Edit localStorage entry
                    </h2>
                    <form className="item-input">
                        <label>Name</label>
                        <input type="text" placeholder={name}></input>

                        <label>Quantity</label>
                        <input type="number" placeholder={quantity}></input>

                        <label>Market hash name</label>
                        <input type="text" placeholder={market_hash_name}></input>

                        <label>Steam url</label>
                        <input type="text" placeholder={steam_url}></input>

                        <label>Buff url</label>
                        <input type="text" placeholder={buff_url}></input>

                        
                        <button
                            type="button"
                            onClick={() => addToInventory}
                        >
                            Edit
                        </button>

                        <button
                            type="button"
                            className="btn-del"
                            onClick={() => deleteEntry(myKey)}
                        >
                                Delete
                        </button>


                    </form>
                </div>
                <div className="modal-bg"></div>
            </div>
            </Popup>
        </React.Fragment>
    )
}

export default Edit