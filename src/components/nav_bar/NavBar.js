import React from 'react';
import { NavContainer, StyledTabs, Tab } from './styles';
import { Tabs, Section } from '@dnb/eufemia';
import { WalletPage } from '../../pages/WalletPage';
import { CoinPage } from '../../pages/CoinPage'
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <Section aria-label="Navigation bar">
            <NavContainer>
                <Link to="/about">About</Link>
                <Link to="/coins">Coins</Link>
                <Link to="/wallet">Wallet</Link>
            </NavContainer>
        </Section>
    )
}

const tabData = [
    { title: 'wallet', key: '/wallet' },
    { title: 'about', key: '/about' },
    { title: 'Coins', key: '/coins' },
]