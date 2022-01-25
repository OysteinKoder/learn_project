import React from 'react';
import { useEffect } from 'react';
import { CoinContainer, TopCard } from '../components/coinPage/styles';
import { getBnb, getBtc, cleanState, getDoge, getUsd, getEth, } from '../redux/actions/coinsActions';
import { useSelector } from 'react-redux';
import { store } from '../redux/store';
import { buyBtc, sellBtc, buyEth, sellEth, buyDoge, sellDoge, buyBnb, sellBnb } from '../redux/actions/walletActions';
import { Button, InputMasked, Li, Ul, Img, H3 } from '@dnb/eufemia';
import { CoinIcon } from '../images/styles';
import UsdIcon from '../images/UsdIcon.png';
import ethereumCoinIcon from '../images/EthIcon.png'
import BitcoinIcon from '../images/BitcoinIcon.png';
import DogeCoinIcon from '../images/DogeIcon.png';
import BinanceCoinIcon from '../images/BnbIcon.png';
import { CoinCard } from '../components/coinPage/components';

export const CoinPage = () => {
    useEffect(() => {
        store.dispatch(cleanState())
        store.dispatch(getUsd())
        store.dispatch(getBtc())
        store.dispatch(getEth())
        store.dispatch(getDoge())
        store.dispatch(getBnb())
    }, [])

    const bitCoinData = useSelector(state => state.coins.btc[0]);
    const ethereumCoinData = useSelector(state => state.coins.eth[0]);
    const dogeCoinData = useSelector(state => state.coins.doge[0]);
    const binanceCoinData = useSelector(state => state.coins.bnb[0]);

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



    if (bitCoinData && ethereumCoinData && dogeCoinData && binanceCoinData) {
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
                <CoinCard
                    coin={bitCoinData}
                    coinName={bitCoinData.name}
                    icon={BitcoinIcon}
                    buyAction={BuyBtc}
                    sellAction={SellBtc}
                    coinWallet={btcWallet}
                />
                <CoinCard
                    coin={ethereumCoinData}
                    coinName={ethereumCoinData.name}
                    icon={ethereumCoinIcon}
                    buyAction={BuyEth}
                    sellAction={SellEth}
                    coinWallet={ethWallet}
                />
                <CoinCard
                    coin={dogeCoinData}
                    coinName={dogeCoinData.name}
                    icon={DogeCoinIcon}
                    buyAction={BuyDoge}
                    sellAction={SellDoge}
                    coinWallet={dogeWallet}
                />
                <CoinCard
                    coin={binanceCoinData}
                    coinName={binanceCoinData.name}
                    icon={BinanceCoinIcon}
                    buyAction={BuyBnb}
                    sellAction={SellBnb}
                    coinWallet={bnbWallet}
                />
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