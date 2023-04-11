import React, { useEffect, useState } from "react";
import MyComponent from './MyComponent'
import Inventory from "./Inventory";

function Items() {

    return (
        // Map through inventory object
        Object.keys(Inventory).map((key) => (
            <MyComponent
                key={key}
                thumbnail={Inventory[key].image}                        // image url from steam market listing
                name={Inventory[key].name}                              // user chosen name
                quantity={Inventory[key].quantity}                      // quantity in inventory
                market_hash_name={Inventory[key].market_hash_name}      // item name in steam url to fetch price from
                url1={Inventory[key].url1}                              // url to steam market listing
                url2={Inventory[key].url2}                              // url to buff market listing
            />
        ))
    )
}

export default Items