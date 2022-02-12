import React from "react";

import {
    Button,
    InputMasked,
    Li,
    Ul,
    H3,
} from '@dnb/eufemia';

import { CoinContainer } from '../coinPageStyles';
import { CoinIcon } from "../../../images/styles";


const CoinCard = (props) => {
    const {
        coin,
        icon,
        coinWallet,
        buyAction,
        sellAction,
        backgroundColor,
    } = props
    return (
        <CoinContainer backgroundColor={backgroundColor}>
            <Ul>
                <H3 bottom="1rem" top="0.5rem"> {coin.name} <CoinIcon height="25rem" src={icon} /></H3>
                <Li className="dnb-ul dnb-unstyled-list dnb-h--xx-large">
                    {"24 h change: "}
                    <span style={
                        coin.percent_change_24h > 0 ? { color: "green" }
                            : coin.percent_change_24h < 0 ? { color: "red" }
                                : undefined
                    }>
                        {coin.percent_change_24h} %
                    </span>
                </Li>
                <br />
                <Li className="dnb-ul dnb-unstyled-list dnb-h--xx-large">{"Price: "}{parseInt(coin.price_usd).toLocaleString()}$</Li>
                <br />
                <Li className="dnb-ul dnb-unstyled-list dnb-h--xx-large" key={coin.symbol}> Your Wallet: {coinWallet}</Li>
            </Ul>

            <div>
                <Button space="small" onClick={buyAction}>Buy</Button>
                <InputMasked as_currency="USD" />
            </div>

            <div>
                <Button space="small" onClick={sellAction}> Sell </Button>
                <InputMasked as_currency="USD" />
            </div>
        </CoinContainer>
    )
}

export default CoinCard
