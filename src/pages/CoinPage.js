import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { CoinCard } from '../components/coinPage/Styles';

export const CoinPage = () => {
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

                    <CoinCard>
                        <ul key={coin.id}>
                            <li>{coin.name}</li>
                            <li>({coin.symbol})</li>
                            <li>{coin.price_usd} </li>
                        </ul>
                    </CoinCard>
                )}
        </div>
    )
}
