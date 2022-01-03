import React from 'react';
import { useSelector } from 'react-redux';
import { WalletCard } from '../components/walletPage/styles';

export const WalletPage = () => {
    const currentWallet = useSelector(state => state.wallet)
    if (currentWallet) 
    {return(
        <div>
    <WalletCard> <p>USD:${currentWallet.USD}</p> </WalletCard>
    <WalletCard> <p>BTC: {currentWallet.BTC} coins</p> </WalletCard>
    <WalletCard> <p>ETH: {currentWallet.ETH} coins</p> </WalletCard>
    <WalletCard> <p>DOGE:{currentWallet.DOGE} coins</p> </WalletCard>
    <WalletCard> <p>BNB: {currentWallet.BNB} coins</p> </WalletCard>
       </div>
)}}