import { Button, P } from '@dnb/eufemia';
import React from 'react';
import { useSelector } from 'react-redux';
import { WalletCard } from '../components/walletPage/styles';
import { resetWallet } from '../redux/actions/walletActions';
import { store, persistor } from '../redux/store';

const ResetWallet = () => {
    console.log("hey")
    return (
        store.dispatch(resetWallet()))}

export const WalletPage = () => {
    const currentWallet = useSelector(state => state.wallet)
    if (currentWallet) 
    {return(
        <div>
    <WalletCard> <p>USD:{currentWallet.USD.toLocaleString()} $</p> </WalletCard>
    <WalletCard> <p>BTC: {currentWallet.BTC.toLocaleString()} coins</p> </WalletCard>
    <WalletCard> <p>ETH: {currentWallet.ETH.toLocaleString()} coins</p> </WalletCard>
    <WalletCard> <p>DOGE:{currentWallet.DOGE.toLocaleString()} coins</p> </WalletCard>
    <WalletCard> <p>BNB: {currentWallet.BNB.toLocaleString()} coins</p> </WalletCard>
    <WalletCard> 
    <Button
    onClick={ResetWallet}>Reset Wallet</Button>
    <P>Warning: this action resets the wallet to 1 000 000$ USD only</P>
    </WalletCard>
       </div>
)}}