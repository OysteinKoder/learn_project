import React from 'react';
import { useEffect } from 'react';
import { CoinCard, TopCard, } from '../components/coinPage/styles';
import { getBnb, getBtc, cleanState, getDoge, getUsd, getEth, getCoins } from '../redux/actions/coinsActions';
import { useSelector } from 'react-redux';
import { store } from '../redux/store';
import { buyBtc, sellBtc, buyEth, sellEth, buyDoge, sellDoge, buyBnb, sellBnb } from '../redux/actions/walletActions';
import { Button, InputMasked, Li, Ul, Img, H3 } from '@dnb/eufemia';
import { CoinIcon } from '../images/styles';
import UsdIcon from '../images/UsdIcon.png';
import EthIcon from '../images/EthIcon.png';
import BtcIcon from '../images/BtcIcon.png';
import DogeIcon from '../images/DogeIcon.png';
import BnbIcon from '../images/BnbIcon.png';



export const CoinPage = () => {
    useEffect(() => {
        store.dispatch(cleanState())
        // setTimeout(() => { store.dispatch(getUsd()) }, 5)
        // setTimeout(() => { store.dispatch(getBtc()) }, 100)
        // setTimeout(() => { store.dispatch(getEth()) }, 350)
        // setTimeout(() => { store.dispatch(getDoge()) }, 550)
        // setTimeout(() => { store.dispatch(getBnb()) }, 750)
        store.dispatch(getCoins())
        
    }, [])
    
    const usdWallet = useSelector(state => state.wallet.USD);
    const btcWallet = useSelector(state => state.wallet.BTC)
    const ethWallet = useSelector(state => state.wallet.ETH);
    const dogeWallet = useSelector(state => state.wallet.DOGE);
    const bnbWallet = useSelector(state => state.wallet.BNB);

    const BuyBtc = () => (store.dispatch(buyBtc()))
    const SellBtc = () => (store.dispatch(sellBtc()))

    const BuyEth = () => (store.dispatch(buyEth()))
    const SellEth = () => (store.dispatch(sellEth()))

    const BuyDoge = () => (store.dispatch(buyDoge()))
    const SellDoge = () => (store.dispatch(sellDoge()))

    const BuyBnb = () => (store.dispatch(buyBnb()))
    const SellBnb = () => (store.dispatch(sellBnb()))
    const cryptoData = useSelector(state => state.coins.coins[1]);
    
    let newArray = []
    if (cryptoData) {
        const coins = cryptoData.data;
        for (const coin of coins) {
                if(coin.id === "90"){
                console.log(coin)
            return (
                    <div>
                        hey
                    </div>
                )   }
                else if(coin.id === "518"){
                    console.log(coin)
                return (
                        <div>
                            hey
                        </div>
                    )   }
        }
        
    }
    else {
        return(
            <div>loading</div>
        )
    }

}