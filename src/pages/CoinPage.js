import React from 'react';
import { useEffect } from 'react';
import { CoinCard } from '../components/coinPage/Styles';
import { getBnb, getBtc, cleanState, getDoge, getUsd, getEth, } from '../redux/actions/coinsActions';
import { useSelector } from 'react-redux';
import { store } from '../redux/store';
import { buyBtc } from '../redux/actions/walletActions';
import { Button, Li, Ul } from '@dnb/eufemia';

export const CoinPage = () => {
    useEffect(() => {
        store.dispatch(cleanState())
        store.dispatch(getUsd())
        store.dispatch(getBtc())
        store.dispatch(getEth())
        store.dispatch(getDoge())
        store.dispatch(getBnb())
    }, [])

    const cryptoData = useSelector(state => state.coins.coins);


    const BtcValue = () => {
        store.dispatch(buyBtc())
    }
    if (cryptoData) {
        console.log(cryptoData);
        return (
            <div>
                <Button onClick={
                    BtcValue
                }
                >click</Button>
                {
                    cryptoData.map(coin =>
                        <CoinCard>
                            <Ul key={coin.id}>
                                <Li className="dnb-ul dnb-unstyled-list">{coin.name}</Li>
                                <Li className="dnb-ul dnb-unstyled-list">({coin.symbol})</Li>
                                <Li className="dnb-ul dnb-unstyled-list">{coin.price_usd} </Li>
                            </Ul>
                            <Button>Buy</Button>
                            <Button>Sell</Button>
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