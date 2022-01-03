import React from 'react';
import { NavContainer, StyledAnchor, NavFlex, StyledH1  } from './styles';
import { H1 } from '@dnb/eufemia';
export const NavBar = () => {
    return (
            <NavContainer>
                <StyledH1
                 >Fantasy Crypto</StyledH1>
<NavFlex>
                <StyledAnchor 
                 to="/about"
                 >About</StyledAnchor>
                <StyledAnchor 
                
                 to="/coins"
                 >Coins</StyledAnchor>
                <StyledAnchor 
                 to="/wallet"
                 >Wallet</StyledAnchor>
                 </NavFlex>
            </NavContainer>
    )
}
// eslint-disable-next-line
const tabData = [
    { title: 'wallet', key: '/wallet' },
    { title: 'about', key: '/about' },
    { title: 'Coins', key: '/coins' },
]