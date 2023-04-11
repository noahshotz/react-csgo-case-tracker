import React, { useEffect, useState } from "react";
import axios from "axios";

const euroFormatter = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
});

async function getData(isLoading, setLoading, myData, setMyData, market_hash_name) {
    const proxy = "https://web-production-0fb1.up.railway.app/"
    const baseURL = "https://steamcommunity.com/market/priceoverview/?appid=730&currency=3&market_hash_name="
    const request = market_hash_name
    const fetchURL = proxy + baseURL + request

    await axios.get(fetchURL,
        {
            headers: {
                "x-requested-with": "XMLHttpRequest"
            }
        }).then(response => {
            setMyData(response.data);
            setLoading(false);
        })
}

function MyComponent({
    thumbnail, name, quantity, market_hash_name, url1, url2
}) {

    const [isLoading, setLoading] = useState(true);
    const [myData, setMyData] = useState();


    useEffect(() => {
        getData(isLoading, setLoading, myData, setMyData, market_hash_name)
    }, [])

    if (isLoading) {
        return (
            <React.Fragment>
                <div className="row">
                    <img src={thumbnail} />
                    <div className="item-section">
                        <label>Name</label>
                        <span className="name">{name}</span>
                    </div>
                    <div className="item-section">
                        <label>Quantity</label>
                        <span>{quantity}</span>
                    </div>
                    <div className="item-section">
                        <label>Value</label>
                        <span>Loading</span>
                    </div>
                    <div className="item-section">
                        <label>Total Value</label>
                        <span>Loading</span>
                    </div>
                    <a href={url1} target="_blank" rel="noopener noreferrer">Steam</a>
                    <a href={url2} target="_blank" rel="noopener noreferrer">Buff</a>
                </div>
            </React.Fragment>
        )
    }

    if (!isLoading) {

        const price = parseFloat(myData.lowest_price.replace("€", "").replace(",", ".")).toFixed(2);

        return (
            <React.Fragment>
                <div className="row">
                    <img src={thumbnail} />
                    <div className="item-section">
                        <label>Name</label>
                        <span className="name">{name}</span>
                    </div>
                    <div className="item-section">
                        <label>Quantity</label>
                        <span>{quantity}</span>
                    </div>
                    <div className="item-section">
                        <label>Price</label>
                        <span>{euroFormatter.format(price)}</span>
                    </div>
                    <div className="item-section">
                        <label>Total Value</label>
                        <span>{euroFormatter.format(price * quantity)}</span>
                    </div>
                    <a href={url1}>Steam</a>
                    <a href={url2}>Buff</a>
                </div>
            </React.Fragment>
        )
    }
}

export default MyComponent