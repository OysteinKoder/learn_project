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
    useEffect(() => {
        store.dispatch(getCoins())
    }, [])
    const cryptoData = useSelector(state => state.coins.coins.data)
    const BtcValue = () => {
        store.dispatch(getBtcValue())
    }
    if (cryptoData) {
        console.log(cryptoData);
        return (
            <div>
                <button onClick={
                    BtcValue
                }
                >click</button>
                {
                    cryptoData.map(coin =>
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
    else {
        return (
            <div>
                loading
            </div>
        )
    }
}