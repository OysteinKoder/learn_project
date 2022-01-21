import React from 'react';
import { useEffect } from 'react';
import { CoinCard, TopCard, } from '../components/coinPage/Styles';
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

    const cryptoData = useSelector(state => state.coins.coins[1]);

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

let coinArray = []
    if (cryptoData) {
        let newArray = []
        const coins = cryptoData.data;
        console.log(coins)
        setTimeout( () => {
        for (let i = 0; i < 100; i++) 
            if (
                coins[i].id === "518" 
                || coins[i].id === "2710" 
                || coins[i].id === "90"
                || coins[i].id === "80" 
                || coins[i].id === "2" 
                ) {
                newArray.push(coins[i])
                console.log(newArray)
            }
        },200)
        
        return (
            <div>
                <TopCard style={{ justifyContent: "center" }}>
                    <Img
                        src={UsdIcon}
                        height="64px" />
                    <H3 style={{ color: "var(--color-sea-green)", margin: "1rem" }}>{usdWallet}$ USD</H3>
                    <Img
                        src={UsdIcon}
                        height="64px" />
                </TopCard>
                {
                    coinArray.splice(1).map((coin) =>
                        <CoinCard>
                            <Ul key={coin.id} >
                                <Li key={coin.name} className="dnb-ul dnb-unstyled-list dnb-h--xx-large">{coin.name}
                                    <CoinIcon
                                        height="25rem"
                                        src={
                                            coin.id === "518" ? UsdIcon
                                                : coin.id === "90" ? BtcIcon
                                                    : coin.id === "80" ? EthIcon
                                                        : coin.id === "2" ? DogeIcon
                                                            : coin.id === "2710" ? BnbIcon
                                                                : undefined
                                        } />
                                </Li>
                                <br />
                                <Li className="dnb-ul dnb-unstyled-list dnb-h--xx-large">24 h change: <span style={
                                    coin.percent_change_24h > 0 ? {color: "green"}
                                    : coin.percent_change_24h < 0 ? {color: "red"}
                                    : undefined
                                }>{coin.percent_change_24h} % </span> </Li>
                                <br></br>
                                <Li key={coin.rank}
                                    className="dnb-ul dnb-unstyled-list dnb-h--xx-large">Price:
                                     {coin.price_usd} $ </Li>
                                <br></br>
                                <Li className="dnb-ul dnb-unstyled-list dnb-h--xx-large" key={coin.symbol}>
                                    Your Wallet: {
                                        coin.id === "518" ? usdWallet + " $"
                                            : coin.id === "90" ? btcWallet
                                                : coin.id === "80" ? ethWallet
                                                    : coin.id === "2" ? dogeWallet
                                                        : coin.id === "2710" ? bnbWallet
                                                            : undefined
                                    }
                                </Li>
                            </Ul>
                            <div>
                                <Button
                                    space="small"
                                    onClick=
                                    {
                                        coin.id === "90" ? BuyBtc
                                            : coin.id === "80" ? BuyEth
                                                : coin.id === "2" ? BuyDoge
                                                    : coin.id === "2710" ? BuyBnb
                                                        : undefined
                                    }
                                >Buy</Button>
                                <InputMasked
                                    as_currency="USD" />
                            </div>
                            <div>
                                <Button
                                    space="small"
                                    onClick=
                                    {
                                        coin.id === "90" ? SellBtc
                                            : coin.id === "80" ? SellEth
                                                : coin.id === "2" ? SellDoge
                                                    : coin.id === "2710" ? SellBnb
                                                        : undefined
                                    }
                                >Sell</Button>
                                <InputMasked
                                    as_currency="USD" />
                            </div>
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