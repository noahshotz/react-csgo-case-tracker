import React, { useEffect, useState } from "react";
import Popup from 'reactjs-popup'

const editEntry = (
    myKey,
    nameInput,
    quantityInput,
    hashnameInput,
    imageInput,
    steamInput,
    buffInput
    ) => {

    // parse localstorage to object
    let inventory = JSON.parse(localStorage.getItem('inventory'))

    // update inventory object
    inventory[myKey] = {
        name: nameInput || "DEFAULT",
        quantity: quantityInput || 1,
        market_hash_name: hashnameInput,
        image: imageInput,
        url1: steamInput,
        url2: buffInput
    }

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
    myKey, name, quantity, market_hash_name, steam_url, buff_url
}) {

    // set states for all inputs
    const [nameInput, setNameInput] = useState('');
    const [quantityInput, setQuantityInput] = useState(0);
    const [hashnameInput, setHashnameInput] = useState('');
    const [imageInput, setImageInput] = useState('');
    const [steamInput, setSteamInput] = useState('');
    const [buffInput, setBuffInput] = useState('');

    const handleNameInput = (event) => {
        setNameInput(event.target.value); // Update the inputValue1 state with the input value
        console.log(nameInput)
    }

    const handleQuantityInput = (event) => {
        setQuantityInput(event.target.value); // Update the inputValue2 state with the input value
        console.log(quantityInput)
    }

    const handleHashnameInput = (event) => {
        setHashnameInput(event.target.value); // Update the inputValue2 state with the input value
        console.log(hashnameInput)
    }

    const handleImageInput = (event) => {
        setImageInput(event.target.value); // Update the inputValue2 state with the input value
        console.log(imageInput)
    }

    const handleSteamUrlInput = (event) => {
        setSteamInput(event.target.value); // Update the inputValue2 state with the input value
        console.log(steamInput)
    }

    const handleBuffUrlInput = (event) => {
        setBuffInput(event.target.value); // Update the inputValue2 state with the input value
        console.log(buffInput)
    }

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
                            <input
                                type="text"
                                placeholder={name}
                                name="name"
                                value={nameInput}
                                onChange={handleNameInput}
                            >
                            </input>

                            <label>Quantity</label>
                            <input
                                type="number"
                                placeholder={quantity}
                                name="quantity"
                                value={quantityInput}
                                onChange={handleQuantityInput}
                            >
                            </input>

                            <label>Market hash name</label>
                            <input
                                type="text"
                                placeholder={market_hash_name}
                                name="markethashname"
                                value={hashnameInput}
                                onChange={handleHashnameInput}
                            >
                            </input>

                            <label>Steam url</label>
                            <input
                                type="text"
                                placeholder={steam_url}
                                name="steamurl"
                                value={steamInput}
                                onChange={handleSteamUrlInput}
                            >
                            </input>

                            <label>Buff url</label>
                            <input
                                type="text"
                                placeholder={buff_url}
                                name="buffurl"
                                value={buffInput}
                                onChange={handleBuffUrlInput}
                            >
                            </input>

                            <button
                                type="button"
                                onClick={() => editEntry(
                                    myKey,
                                    nameInput,
                                    quantityInput,
                                    hashnameInput,
                                    steamInput,
                                    steamInput,
                                    buffInput
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