import React, { useEffect, useState } from "react";
import Popup from 'reactjs-popup'
import { MdModeEdit as EditIcon } from 'react-icons/md'

const editEntry = (
    myKey,
    quantityInput
) => {

    // Parse localStorage to object
    let inventory = JSON.parse(localStorage.getItem('inventory'));

    // Update inventory object
    inventory = {
        ...inventory, // Clone original object
        [myKey]: { // Update specific property using computed property name
            ...inventory[myKey], // Clone original property value
            quantity: quantityInput || 1 // Update quantity property
        }
    };


    // delete current localstorage
    localStorage.removeItem('inventory')

    // reset localstorage inventory
    localStorage.setItem('inventory', JSON.stringify(inventory))
    window.dispatchEvent(new Event('inventory-update'))
}

const deleteEntry = (myKey) => {

    // get localstorage 'inventory' & parse into object
    let inventory = JSON.parse(localStorage.getItem('inventory'))

    // delete 'inventory'.entry
    delete inventory[myKey]

    // delete current localstorage
    localStorage.removeItem('inventory')

    // store object length
    const objectLength = Object.keys(inventory).length;
    console.log("Object length: ", objectLength)

    if (objectLength > 0) {
        // push new localstorage
        localStorage.setItem('inventory', JSON.stringify(inventory))
        window.dispatchEvent(new Event('inventory-update'))
    } else {
        window.dispatchEvent(new Event('inventory-clear'))
    }

}

function Edit({
    myKey, quantity, name
}) {

    // set states for all inputs
    const [quantityInput, setQuantityInput] = useState(quantity);

    const handleQuantityInput = (event) => {
        setQuantityInput(event.target.value); // Update the inputValue2 state with the input value
    }

    return (
        <React.Fragment>
            <Popup trigger={<button className="btn-inline"><EditIcon /></button>} modal lockScroll>
                <div className="modal-group">
                    <div className="modal-container">
                        <h3>
                            Edit {name}
                        </h3>
                        <form className="item-input">

                            <label>Quantity</label>
                            <input
                                type="number"
                                placeholder={quantity}
                                name="quantity"
                                value={quantityInput}
                                onChange={handleQuantityInput}
                            >
                            </input>

                            <button
                                className="btn-edit"
                                type="button"
                                onClick={() => editEntry(
                                    myKey,
                                    quantityInput
                                )}>
                                Edit
                            </button>

                            <button
                                type="button"
                                className="btn-del"
                                onClick={() => deleteEntry(myKey)}>
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