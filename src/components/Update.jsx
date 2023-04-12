import React from "react";


function updatetolocal() {

    if (JSON.parse(localStorage.getItem('inventory')) !== null) {

        let inventory = JSON.parse(localStorage.getItem('inventory'))

        inventory.newCase = {
            name: "Dummy case",
            quantity: 1000,
            market_hash_name: "Operation%20Phoenix%20Weapon%20Case",
            image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFUuh6qZJmlD7tiyl4OIlaGhYuLTzjhVupJ12urH89ii3lHlqEdoMDr2I5jVLFFSv_J2Rg/360fx360f",
            url1: "https://steamcommunity.com/market/listings/730/Operation%20Phoenix%20Weapon%20Case",
            url2: "https://buff.163.com/goods/35890?from=market#tab=selling"
        }

        console.log(inventory)
        localStorage.removeItem('inventory')
        localStorage.setItem('inventory', JSON.stringify(inventory))
        window.dispatchEvent(new Event('inventory-update'));
    } else {
        console.log("Local storage empty")
    }

}

function Update() {

    return (
        <React.Fragment>
            <button onClick={updatetolocal}>Update storage</button>
        </React.Fragment>
    )

}

export default Update