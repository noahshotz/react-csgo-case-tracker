import React, { useEffect, useState } from "react";
import Popup from 'reactjs-popup';
import { IoAdd as AddIcon } from 'react-icons/io5'

import Select from 'react-select'

const options = [
    {
        value: 'Revolution%20Case',
        label: 'Revolution',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFQynaHMJT9B74-ywtjYxfOmMe_Vx28AucQj3brAoYrz3Fay_kY4MG_wdYeLMlhpLMaM-1U/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Revolution%20Case',
            buffURL: 'https://buff.163.com/goods/921379?from=market#tab=selling'
        }
    },
    {
        value: 'Recoil%20Case',
        label: 'Recoil Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFQxnaecIT8Wv9rilYTYkfTyNuiFwmhUvpZz3-2Z9oqg0Vew80NvZzuiJdeLMlhpwFO-XdA/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Recoil%20Case',
            buffURL: 'https://buff.163.com/goods/900464?from=market#tab=selling'
        }
    },
    {
        value: 'Dreams%20%26%20Nightmares%20Case',
        label: 'Dreams & Nightmares Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFQwnfCcJmxDv9rhwIHZwqP3a-uGwz9Xv8F0j-qQrI3xiVLkrxVuZW-mJoWLMlhpWhFkc9M/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Dreams%20%26%20Nightmares%20Case',
            buffURL: 'https://buff.163.com/goods/886606?from=market#tab=selling'
        }
    },
    {
        value: 'Operation%20Riptide%20Case',
        label: 'Operation Riptide Case',
        data: {
            thumbnail: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU5narKKW4SvIrhw9PZlaPwNuqAxmgBucNz2L3C8dyj31Xn-0VtMW3wdY6LMlhplna0TPI/360fx360f',
            steamURL: 'https://steamcommunity.com/market/listings/730/Operation%20Riptide%20Case',
            buffURL: 'https://buff.163.com/goods/871092?from=market#tab=selling'
        }
    },
    {
        value: '',
        label: '',
        data: {
            thumbnail: '',
            steamURL: '',
            buffURL: ''
        }
    },
    {
        value: '',
        label: '',
        data: {
            thumbnail: '',
            steamURL: '',
            buffURL: ''
        }
    },
    {
        value: '',
        label: '',
        data: {
            thumbnail: '',
            steamURL: '',
            buffURL: ''
        }
    },
    {
        value: '',
        label: '',
        data: {
            thumbnail: '',
            steamURL: '',
            buffURL: ''
        }
    },
    // Add other options here
]

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
        <Popup trigger={<button>Add <AddIcon /></button>} modal lockScroll>
            <div className="modal-group">
                <div className="modal-container">
                    <h2>
                        New entry
                    </h2>
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
