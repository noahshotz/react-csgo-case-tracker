import React, { useEffect, useState } from "react";
import Popup from 'reactjs-popup';
//import 'reactjs-popup/dist/index.css';

const addToInventory = (
    nameInput,
    quantityInput,
    hashnameInput,
    imageInput,
    steamInput,
    buffInput
) => {

    // if inventory does not exists create new
    if (localStorage.getItem('inventory') === null) {
        console.log("inventory not set yet")

        let inventory = {}

        // get data from input form
        // refactor to custom function

        inventory.modalCase = {
            name: nameInput || "NULL",
            quantity: quantityInput || 0,
            market_hash_name: hashnameInput || "NULL",
            image: imageInput || "NULL",
            url1: steamInput || "NULL",
            url2: buffInput || "NULL"
        }

        localStorage.setItem('inventory', JSON.stringify(inventory))
        window.dispatchEvent(new Event('inventory-update'));

    } else {
        // else add entry to inventory
        console.log("inventory set! :)")

        // get current state of inventory as object
        let inventory = JSON.parse(localStorage.getItem('inventory'))

        inventory.modalCase = {
            name: nameInput || "NULL",
            quantity: quantityInput || 0,
            market_hash_name: hashnameInput || "NULL",
            image: imageInput || "NULL",
            url1: steamInput || "NULL",
            url2: buffInput || "NULL"
        }

        localStorage.removeItem('inventory')
        localStorage.setItem('inventory', JSON.stringify(inventory))
        window.dispatchEvent(new Event('inventory-update'));
    }
}

function Modal() {

    // set states for all inputs
    const [nameInput, setNameInput] = useState('');
    const [quantityInput, setQuantityInput] = useState(0);
    const [hashnameInput, setHashnameInput] = useState('');
    const [imageInput, setImageInput] = useState('');
    const [steamInput, setSteamInput] = useState('');
    const [buffInput, setBuffInput] = useState('');

    const handleNameInput = (event) => {
        setNameInput(event.target.value); // Update the inputValue1 state with the input value
    }

    const handleQuantityInput = (event) => {
        setQuantityInput(event.target.value); // Update the inputValue2 state with the input value
    }

    const handleHashnameInput = (event) => {
        setHashnameInput(event.target.value); // Update the inputValue2 state with the input value
    }

    const handleImageInput = (event) => {
        setImageInput(event.target.value); // Update the inputValue2 state with the input value
    }

    const handleSteamUrlInput = (event) => {
        setSteamInput(event.target.value); // Update the inputValue2 state with the input value
    }

    const handleBuffUrlInput = (event) => {
        setBuffInput(event.target.value); // Update the inputValue2 state with the input value
    }

    return (
        <Popup trigger={<button> Modal</button>} modal lockScroll>
            <div className="modal-group">
                <div className="modal-container">
                    <h2>
                        New entry
                    </h2>
                    <form className="item-input">
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={nameInput}
                            onChange={handleNameInput}
                        >
                        </input>

                        <label>Quantity</label>
                        <input
                            type="number"
                            placeholder="Quantity"
                            name="quantity"
                            value={quantityInput}
                            onChange={handleQuantityInput}
                        >
                        </input>

                        <label>Market hash name</label>
                        <input
                            type="text"
                            placeholder="Market hash name"
                            name="markethashname"
                            value={hashnameInput}
                            onChange={handleHashnameInput}
                        >
                        </input>

                        <label>Image url</label>
                        <input
                            type="text"
                            placeholder="Image url"
                            name="image"
                            value={imageInput}
                            onChange={handleImageInput}
                        >
                        </input>

                        <label>Steam url</label>
                        <input
                            type="text"
                            placeholder="Steam url"
                            name="steamurl"
                            value={steamInput}
                            onChange={handleSteamUrlInput}
                        >
                        </input>

                        <label>Buff url</label>
                        <input
                            type="text"
                            placeholder="Buff url"
                            name="buffurl"
                            value={buffInput}
                            onChange={handleBuffUrlInput}
                        >
                        </input>

                        <button
                            type="button"
                            onClick={() => addToInventory(
                                nameInput,
                                quantityInput,
                                hashnameInput,
                                imageInput,
                                steamInput,
                                steamInput,
                                buffInput
                            )}
                        >
                            Add
                        </button>
                    </form>
                </div>
                <div className="modal-bg"></div>
            </div>
        </Popup>
    )

}

export default Modal