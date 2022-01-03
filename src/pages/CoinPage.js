import React from 'react';
import { useEffect } from 'react';
import { CoinCard, } from '../components/coinPage/Styles';
import { getBnb, getBtc, cleanState, getDoge, getUsd, getEth, } from '../redux/actions/coinsActions';
import { useSelector } from 'react-redux';
import { store } from '../redux/store';
import { buyBtc } from '../redux/actions/walletActions';
import { Button, InputMasked, Li, Ul } from '@dnb/eufemia';

const UsdGet = () => {store.dispatch(getUsd())}

export const CoinPage = () => {
    useEffect(() => {
        store.dispatch(cleanState())
        setTimeout(() => {store.dispatch(getUsd())}, 5)
        setTimeout(() => {store.dispatch(getBtc())}, 150)
        setTimeout(() => {store.dispatch(getEth())}, 300)
        setTimeout(() => {store.dispatch(getDoge())}, 450)
        setTimeout(() => {store.dispatch(getBnb())}, 600)

    }, [])

    const cryptoData = useSelector(state => state.coins.coins);

    const BuyBtc = () => (store.dispatch(buyBtc()))
    if (cryptoData) {
        console.log(cryptoData);
        return (
            <div>
                {/* <Button onClick={
                    BtcValue
                }
                >click</Button> */}
                {
                    cryptoData.map((coin) =>
                        <CoinCard>
                            <Ul key={coin.id} >
                                <Li key={coin.name} className="dnb-ul dnb-unstyled-list" >{coin.name}</Li>
                                <Li key={coin.symbol} className="dnb-ul dnb-unstyled-list" >({coin.symbol})</Li>
                                <Li key={coin.rank} className="dnb-ul dnb-unstyled-list" >{coin.price_usd} </Li>
                            </Ul>
                            <div>
                                <Button
                                    space="small"
                                    onClick=
                                    {
                                        coin.id === "90" ? BuyBtc
                                            : undefined
                                    }

                                >Buy</Button>
                                <InputMasked
                                    as_currency="USD" />
                            </div>
                            <div>
                                <Button space="small">Sell</Button>
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