import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const CryptoPrint = () => {
    const [coins, setCoins] = useState([])

    useEffect(() => {
        axios.get('https://api.coinlore.net/api/tickers/')
            .then(res =>
                setCoins(res.data.data)
            )
            .catch(() => { console.log('err') })
    }, [])

    console.log(coins)

    return (
        <div>
            {
                coins.map(coin =>
                    <ul key={coin.id}>
                        <li>{coin.name}</li>
                        <li>{coin.price_usd} </li>
                    </ul>
                )}
        </div>
    )
}