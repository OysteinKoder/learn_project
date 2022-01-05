import React from "react";
import { Section, Ul, Li, H2, H3, H4, Anchor } from "@dnb/eufemia";
import { WalletCard } from '../components/walletPage/styles.js'

export const AboutPage = () => (
    <Section aria-label="About Page">
        <WalletCard>
            <H2>About</H2>
            <p>Fantasy crypto is an app that lets you buy and sell four different crypto-coins for fun using fake monopoly money.
                <br></br>
                The app is under development and might not work as intended yet.
            </p>
            <p>The purpose with this app is to learn more about:
                <Ul>
                    <Li>Api's</Li>
                    <Li>Redux</Li>
                    <Li>React Router</Li>
                    <Li> Dnb's css/component library <Anchor target="_blank" href="https://eufemia.dnb.no/"> Eufemia</Anchor></Li>
                </Ul>
            This project is open source and available on <Anchor target="_blank" href="https://github.com/OysteinKoder/learn_project">Github</Anchor></p>
        </WalletCard>
        <WalletCard>
<H2>Log</H2>
<br></br>
</WalletCard>
<WalletCard>
<Ul>
<H3>ToDo</H3>
<Li>[ ] Make figma design for wallet page </Li>
<Li>[ ] Make every other coincard have different background color </Li>
<Li>[ ] improve the load order of the coins to make it consistent. </Li>
<Li>[ ] add possibility to buy a given amount of currency through input field </Li>
<br></br>
</Ul>
</WalletCard>

<WalletCard>
<Ul>
<H3>Finished</H3>
<H4>05.01.2022</H4>
<Li>[√] pure usd wallet now renders on top</Li>
<Li>[√] percentage change for last 24h added, and changes color if + or - change (red/green)</Li>
<br/>

<H4>04.01.2022</H4>
<Li>[√] added current wallet-coins for each coin to the coins page </Li>
<Li>[√] add a reset wallet button </Li>
<Li>[√] now remembers state for wallet, and stores it locally. redux persist </Li>
<Li>[√] Added icons for each crypto coin</Li>
<br/>

<H4>03.01.2022</H4>
<Li>[√] Make the wallet reducer handle buy/sell orders for selected coins </Li>
<Li>[√] implement the simple buy sell order on other coins </Li>
<Li>[√] buttons on Btc now handles simplified buy/sell orders, uses all currency </Li>
<Li>[√] render coins in spesific order instead of random </Li>
<Li>[√] Added headline</Li>
<Li>[√] Added descriptive text to about page</Li>
<Li>[√] Added my "internal" log to the about page and styled it</Li>
<Li>[√] Made default / redirect route be the about page</Li>
<Li>[√] fixed git error </Li>
<Li>[√] make github host project as website </Li>
<Li>[√] removed a bunch of console errors</Li>
<br></br>

<H4>02.01.2022</H4>
<Li>[x] update dependecies for security (failed, eufemia imports would not work anymore) </Li>
<Li>[√] make figma design for trade page </Li>
<Li>[√] work on styling for coins/trade page </Li>
<br></br>

<H4>29.12.21</H4>
<Li>[√] Remove unused "coins" from coins page. </Li>
<Li>[√] coins render based on coin-spesific api calls through redux </Li>
<Li>[√] Add dummy buttons with buy / sell for each coin. </Li>
<br></br>

<H4>28.12.21</H4>
<Li>[√] Start work on reducer that handles wallet information. </Li>
<Li>[√] Make the reducer do a trade, and update wallet info </Li>
<Li>[√] make the api call once and not getting two "undefined" </Li>
<Li>[√] get redux state to render data instead of normal api call.</Li>
<br></br>

<H4>27.12.21</H4>
<Li>[√]  Learned a little about store.getState() method </Li>
<br></br>

<H4>23.12.21</H4>
<Li>[√] console.log data about coins from the redux call </Li>
<Li>[√] Make a reducer setup that handles if the user is loggedIn or not. </Li>
<br></br>

<H4>13.12.21</H4>
<Li>[√] Console log data </Li>
<Li>[√] Set up pathing </Li>
<br></br>
</Ul>
</WalletCard>
    </Section>
)