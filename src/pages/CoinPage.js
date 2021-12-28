import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { CoinCard } from '../components/coinPage/Styles';
import { getCoins } from '../redux/actions/coinsActions';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux'
import { store } from '../redux/store';
import { BUY_BTC } from '../redux/types';
import { getBtcValue } from '../redux/actions/walletActions';

export const CoinPage = () => {
    const [coins, setCoins] = useState([])

    useEffect(() => {
        axios.get('https://api.coinlore.net/api/tickers/')
            .then(res =>
                setCoins(res.data.data)
            )
            .catch(() => { console.log('err') })
    }, [])

    useEffect(() => {
        store.dispatch(getCoins())
    }, [])
    const cryptoData = useSelector(state => state.coins.coins.data)
    console.log(cryptoData);
    let currentState = store.getState();
    currentState.loading = false;
    
    const BtcValue = () => {
        store.dispatch(getBtcValue())
    }
    

    return (
        <div>
        <button onClick={
            BtcValue
        }
        >click</button>
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