import React from 'react';
import { NavContainer, StyledTabs, Tab, StyledSection, StyledAnchor  } from './styles';
import { Tabs, Section, Anchor } from '@dnb/eufemia';
import { WalletPage } from '../../pages/WalletPage';
import { CoinPage } from '../../pages/CoinPage'
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
            <NavContainer>
                <StyledAnchor 
                 to="/about"
                 >About</StyledAnchor>
                <StyledAnchor 
                
                 to="/coins"
                 >Coins</StyledAnchor>
                <StyledAnchor 
                 to="/wallet"
                 >Wallet</StyledAnchor>
            </NavContainer>
    )
}

const tabData = [
    { title: 'wallet', key: '/wallet' },
    { title: 'about', key: '/about' },
    { title: 'Coins', key: '/coins' },
]