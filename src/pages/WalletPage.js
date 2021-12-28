import React from 'react';
import { store } from '../redux/store';
import { useSelector } from 'react-redux';

export const WalletPage = () => {
    const currentWallet = useSelector(state => state.wallet)
    if (currentWallet) 
    {return(
        <div>
    <p>USD:${currentWallet.USD}</p>
    <p>BTC: {currentWallet.BTC}</p>
    <p>ETH: {currentWallet.ETH}</p>
    <p>DOGE:{currentWallet.DOGE}</p>
    <p>BNB: {currentWallet.BNB}</p>
    </div>
)}}