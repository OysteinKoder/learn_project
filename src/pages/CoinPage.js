import React from 'react';
import { useEffect } from 'react';
import { CoinCard, } from '../components/coinPage/Styles';
import { getBnb, getBtc, cleanState, getDoge, getUsd, getEth, } from '../redux/actions/coinsActions';
import { useSelector } from 'react-redux';
import { store } from '../redux/store';
import { buyBtc, sellBtc, buyEth, sellEth, buyDoge, sellDoge, buyBnb, sellBnb } from '../redux/actions/walletActions';
import { Button, InputMasked, Li, Ul, Img } from '@dnb/eufemia';
import { CoinIcon } from '../images/styles';
import UsdIcon from '../images/UsdIcon.png';
import EthIcon from '../images/EthIcon.png'
import BtcIcon from '../images/BtcIcon.png';
import DogeIcon from '../images/DogeIcon.png';
import BnbIcon from '../images/BnbIcon.png';

export const CoinPage = () => {
    useEffect(() => {
        store.dispatch(cleanState())
        setTimeout(() => { store.dispatch(getUsd()) }, 5)
        setTimeout(() => { store.dispatch(getBtc()) }, 100)
        setTimeout(() => { store.dispatch(getEth()) }, 350)
        setTimeout(() => { store.dispatch(getDoge()) }, 550)
        setTimeout(() => { store.dispatch(getBnb()) }, 750)

    }, [])

    const cryptoData = useSelector(state => state.coins.coins);

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



    if (cryptoData) {
        console.log(cryptoData);
        return (
            <div>
                {
                    cryptoData.map((coin) =>
                        <CoinCard>
                            <Ul key={coin.id} >
                                <Li key={coin.name} className="dnb-ul dnb-unstyled-list dnb-h--xx-large">{coin.name}
                                    <CoinIcon
                                        height="25rem"
                                        src={
                                        coin.id === "518" ? UsdIcon
                                            :coin.id === "90" ? BtcIcon
                                                : coin.id === "80" ? EthIcon
                                                    : coin.id === "2" ? DogeIcon
                                                        : coin.id === "2710" ? BnbIcon
                                                                : undefined
                                        } />
                                </Li>
                                <br></br>
                                <Li key={coin.rank} className="dnb-ul dnb-unstyled-list dnb-h--xx-large">Price: {coin.price_usd} $ </Li>
                                <br></br>
                                <Li className="dnb-ul dnb-unstyled-list dnb-h--xx-large" key={coin.symbol}>
                                    Your Wallet: {
                                        coin.id === "518" ? usdWallet + " $"
                                        :coin.id === "90" ? btcWallet
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