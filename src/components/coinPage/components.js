import React from "react";
import { Button, InputMasked, Li, Ul } from '@dnb/eufemia';
import { CoinContainer, TopCard } from './styles';
import { CoinIcon } from "../../images/styles";


export const CoinCard = (props) => {
    const {
        coin,
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
                <Li
                    className="dnb-ul dnb-unstyled-list dnb-h--xx-large">{"Price: "}
                    {parseInt(coin.price_usd).toLocaleString()} $ </Li>
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
