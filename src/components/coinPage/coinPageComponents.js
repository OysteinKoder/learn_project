import React from 'react';
import { Button, InputMasked, Li, Ul, Img, H3 } from '@dnb/eufemia';
import { 
    CoinCard
 } from './styles';

export const CoinCard = (props) => {
    const {
coin_id,
coin_name,
coin_percent_change_24h,
coin_rank,
coin_price_usd,
coin_symbol,
 } = props
    return(
        <CoinCard>
        <Ul key={coin_id} >
            <Li key={coin_name} className="dnb-ul dnb-unstyled-list dnb-h--xx-large">{coin_name}
                <CoinIcon
                    height="25rem"
                    src={
                        coin_id === "518" ? UsdIcon
                            : coin_id === "90" ? BtcIcon
                                : coin_id === "80" ? EthIcon
                                    : coin_id === "2" ? DogeIcon
                                        : coin_id === "2710" ? BnbIcon
                                            : undefined
                    } />
            </Li>
            <br />
            <Li className="dnb-ul dnb-unstyled-list dnb-h--xx-large">24 h change: <span style={
                coin_percent_change_24h > 0 ? {color: "green"}
                : coin_percent_change_24h < 0 ? {color: "red"}
                : undefined
            }>{coin_percent_change_24h} % </span> </Li>
            <br></br>
            <Li key={coin_rank}
                className="dnb-ul dnb-unstyled-list dnb-h--xx-large">Price:
                 {coin_price_usd} $ </Li>
            <br></br>
            <Li className="dnb-ul dnb-unstyled-list dnb-h--xx-large" key={coin_symbol}>
                Your Wallet: {
                    coin_id === "518" ? usdWallet + " $"
                        : coin_id === "90" ? btcWallet
                            : coin_id === "80" ? ethWallet
                                : coin_id === "2" ? dogeWallet
                                    : coin_id === "2710" ? bnbWallet
                                        : undefined
                }
            </Li>
        </Ul>
        <div>
            <Button
                space="small"
                onClick=
                {
                    coin_id === "90" ? BuyBtc
                        : coin_id === "80" ? BuyEth
                            : coin_id === "2" ? BuyDoge
                                : coin_id === "2710" ? BuyBnb
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
                    coin_id === "90" ? SellBtc
                        : coin_id === "80" ? SellEth
                            : coin_id === "2" ? SellDoge
                                : coin_id === "2710" ? SellBnb
                                    : undefined
                }
            >Sell</Button>
            <InputMasked
                as_currency="USD" />
        </div>
    </CoinCard>
    )
}