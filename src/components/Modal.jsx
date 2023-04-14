import React from 'react';
import Popup from 'reactjs-popup';
//import 'reactjs-popup/dist/index.css';

// get data from input form
// fires inside of addToInventory
const getDataFromForm = () => {

}

const addToInventory = () => {

    // if inventory does not exists create new
    if(localStorage.getItem('inventory') === null) {
        console.log("inventory not set yet")

        let inventory = {}

        // get data from input form
        // refactor to custom function

        inventory.modalCase = {
            name: "Modal Case",
            quantity: 1000,
            market_hash_name: "Operation%20Phoenix%20Weapon%20Case",
            image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFUuh6qZJmlD7tiyl4OIlaGhYuLTzjhVupJ12urH89ii3lHlqEdoMDr2I5jVLFFSv_J2Rg/360fx360f",
            url1: "https://steamcommunity.com/market/listings/730/Operation%20Phoenix%20Weapon%20Case",
            url2: "https://buff.163.com/goods/35890?from=market#tab=selling"
        }

        localStorage.setItem('inventory', JSON.stringify(inventory))
        window.dispatchEvent(new Event('inventory-update'));

    } else {
        // else add entry to inventory
        console.log("inventory set! :)")

        // get current state of inventory as object
        let inventory = JSON.parse(localStorage.getItem('inventory'))

        // add entries to inventory object
        inventory.modalCase = {
            name: "Modal Case",
            quantity: 1000,
            market_hash_name: "Operation%20Phoenix%20Weapon%20Case",
            image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFUuh6qZJmlD7tiyl4OIlaGhYuLTzjhVupJ12urH89ii3lHlqEdoMDr2I5jVLFFSv_J2Rg/360fx360f",
            url1: "https://steamcommunity.com/market/listings/730/Operation%20Phoenix%20Weapon%20Case",
            url2: "https://buff.163.com/goods/35890?from=market#tab=selling"
        }

        localStorage.removeItem('inventory')
        localStorage.setItem('inventory', JSON.stringify(inventory))
        window.dispatchEvent(new Event('inventory-update'));
    }
}

function Modal() {

    return (
        <Popup trigger={<button> Modal</button>} modal lockScroll>
            <div className="modal-group">
                <div className="modal-container">
                    <h2>
                        Test
                    </h2>
                    <form className="item-input">
                        <label>Name</label>
                        <input type="text" placeholder="Name"></input>

                        <label>Quantity</label>
                        <input type="number" placeholder="quantity"></input>

                        <label>Market hash name</label>
                        <input type="text" placeholder="market hash name"></input>

                        <label>Steam url</label>
                        <input type="text" placeholder="steam url"></input>

                        <label>Buff url</label>
                        <input type="text" placeholder="buff url"></input>

                        <button type="button" onClick={addToInventory}>Add</button>
                    </form>
                </div>
                <div className="modal-bg"></div>
            </div>
        </Popup>
    )

}

export default Modal