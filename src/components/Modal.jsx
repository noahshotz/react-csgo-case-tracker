import React, { useEffect, useState } from "react";
import Popup from 'reactjs-popup';
import { IoAdd as AddIcon } from 'react-icons/io5'

import options from './csgo-cases';

import Select from 'react-select'

const MyDropdown = ({ onChange }) => (
    <Select options={options} onChange={onChange} />
)

const Modal = () => {

    // Set states for all inputs
    const [quantityInput, setQuantityInput] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null); // Add state for selected option

    const handleQuantityInput = (event) => {
        setQuantityInput(event.target.value); // Update the inputValue2 state with the input value
    }

    const handleOptionChange = (selectedOption) => {
        setSelectedOption(selectedOption); // Update the selected option state
    }

    const addToInventory = () => {

        if (selectedOption) {
            const { value, label, data } = selectedOption; // Extract the necessary data from the selected option
            const nameInput = label;
            const hashnameInput = value;
            const imageInput = data.thumbnail;
            const steamInput = data.steamURL;
            const buffInput = data.buffURL;
    
            console.log("nameInput: ", nameInput);
            console.log("quantityInput: ", quantityInput);
            console.log("hashnameInput: ", hashnameInput);
            console.log("imageInput: ", imageInput);
            console.log("steamInput: ", steamInput);
            console.log("buffInput: ", buffInput);
    
            // if inventory local storage object does not exists create new, else add to existing:
            if (localStorage.getItem('inventory') === null) {
    
                let inventory = {}
    
                inventory[hashnameInput] = {
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
    
                // get current state of inventory as object
                let inventory = JSON.parse(localStorage.getItem('inventory'))
    
                inventory[hashnameInput] = {
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
    }

    return (
        <Popup trigger={<button className="btn-add">Add <AddIcon /></button>} modal lockScroll>
            <div className="modal-group">
                <div className="modal-container">
                    <h3>
                        New entry
                    </h3>
                    <form className="item-input">

                        <label>Item</label>
                        <MyDropdown onChange={handleOptionChange} />

                        <label>Quantity</label>
                        <input
                            type="number"
                            placeholder="Quantity"
                            name="quantity"
                            value={quantityInput}
                            onChange={handleQuantityInput}
                        />

                        <button
                            className="btn-add"
                            type="button"
                            onClick={addToInventory}
                        >
                            Add <AddIcon />
                        </button>
                    </form>
                </div>
                <div className="modal-bg"></div>
            </div>
        </Popup>
    )

}

export default Modal;
