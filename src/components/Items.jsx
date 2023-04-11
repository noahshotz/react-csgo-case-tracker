import React, { useEffect, useState } from "react";
import MyComponent from "./MyComponent";



function Items() {

    const localInventory = JSON.parse(localStorage.getItem('inventory'))
    const [exists, setExists] = useState(false);

    useEffect(() => {

        if (JSON.parse(localStorage.getItem('inventory')) !== null) {
            setExists(true)
        }

        window.addEventListener('inventory-add', () => {
            console.log("event fired")
            const localInventory = JSON.parse(localStorage.getItem('inventory'))
            setExists(true)
        })

        window.addEventListener('inventory-clear', () => {
            console.log("event fired")
            setExists(false) 
        })

    }, [])


    if (!exists) {
        return <h2>Waiting for items</h2>;
    }

    if (exists) {
        return (
            // Map through inventory object
            Object.keys(localInventory).map((key) => (
                <MyComponent
                    key={key}
                    thumbnail={localInventory[key].image} // image url from steam market listing
                    name={localInventory[key].name} // user chosen name
                    quantity={localInventory[key].quantity} // quantity in inventory
                    market_hash_name={localInventory[key].market_hash_name} // item name in steam url to fetch price from
                    url1={localInventory[key].url1} // url to steam market listing
                    url2={localInventory[key].url2} // url to buff market listing
                />
            ))
        );
    }
}

export default Items;
