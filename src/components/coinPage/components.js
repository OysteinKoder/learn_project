import React from "react";
import { Button, InputMasked, Li, Ul } from '@dnb/eufemia';
import { CoinContainer, TopCard } from './styles';
import { CoinIcon } from "../../images/styles";

import UsdIcon from '../../images/UsdIcon.png';
import EthIcon from '../../images/EthIcon.png'
import BitcoinIcon from '../../images/BitcoinIcon.png';
import DogeIcon from '../../images/DogeIcon.png';
import BnbIcon from '../../images/BnbIcon.png';


export const CoinCard = (props) => {
    const {
        coin,
        coinName,
        icon,
        coinWallet,
        buyAction,
        sellAction,
    } = props
    return (
        <CoinContainer>
            <Ul>
                <Li className="dnb-ul dnb-unstyled-list dnb-h--xx-large">{coin.name}
                    <CoinIcon
                        height="25rem"
                        src={icon} />
                </Li>
                <br />
                <Li className="dnb-ul dnb-unstyled-list dnb-h--xx-large">24 h change: <span style={
                    coin.percent_change_24h > 0 ? { color: "green" }
                        : coin.percent_change_24h < 0 ? { color: "red" }
                            : undefined
                }>{coin.percent_change_24h} % </span> </Li>
                <br></br>
                <Li key={coin.rank}
                    className="dnb-ul dnb-unstyled-list dnb-h--xx-large">Price:
                    {coin.price_usd} $ </Li>
                <br></br>
                <Li className="dnb-ul dnb-unstyled-list dnb-h--xx-large" key={coin.symbol}>
                    Your Wallet: {coinWallet}
                </Li>
            </Ul>
            <div>
                <Button
                    space="small"
                    onClick={buyAction}
                >Buy</Button>
                <InputMasked
                    as_currency="USD" />
            </div>
            <div>
                <Button
                    space="small"
                    onClick=
                    {sellAction}
                >Sell</Button>
                <InputMasked
                    as_currency="USD" />
            </div>
        </CoinContainer>
    )
}
