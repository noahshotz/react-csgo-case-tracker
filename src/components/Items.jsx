import React, { useEffect, useState } from "react";
import MyComponent from "./MyComponent";

import { CgSpinnerAlt } from 'react-icons/cg'

function Items() {
    const localInventory = JSON.parse(localStorage.getItem('inventory'));
    const [exists, setExists] = useState(false);
    const [updateKey, setUpdateKey] = useState(0); // Add a state variable for update key

    useEffect(() => {

        // if localStorage 'inventory' exists set exists true
        if (JSON.parse(localStorage.getItem('inventory')) !== null) {
            setExists(true)
        }

        // on update increment updateKey to re-render component
        const inventoryUpdateHandler = () => {
            setExists(true);
            setUpdateKey(prevKey => prevKey + 1); // Update the update key to force a re-render
        };

        // add inventory to localstorage
        window.addEventListener('inventory-add', () => {
            const localInventory = JSON.parse(localStorage.getItem('inventory'));
            setExists(true);
        });

        window.addEventListener('inventory-update', inventoryUpdateHandler); // Add event listener for inventory-update

        // clear local storage & set exists to false
        window.addEventListener('inventory-clear', () => {
            setExists(false);
        });

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('inventory-update', inventoryUpdateHandler);
        }

    }, []);

    if (!exists) {
        return (
            <div className="no-items-card">
                <span>Waiting for items</span>
                <CgSpinnerAlt className="spin" />
            </div>
        );
    }

    if (exists) {
        return (
            // Map through inventory object with the update key as the component key
            Object.keys(localInventory).map((key) => (
                <MyComponent
                    myKey={key}
                    key={`${key}-${updateKey}`} // Use the update key as a part of the component key
                    thumbnail={localInventory[key].image} // image url from steam market listing
                    name={localInventory[key].name} // user chosen name
                    quantity={localInventory[key].quantity} // quantity in inventory
                    market_hash_name={localInventory[key].market_hash_name} // item name in steam url to fetch price from
                    image={localInventory[key].image} // steam thumbnail image
                    url1={localInventory[key].url1} // url to steam market listing
                    url2={localInventory[key].url2} // url to buff market listing
                />
            ))
        );
    }
}

export default Items;
