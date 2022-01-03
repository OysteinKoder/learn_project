import React from 'react';
import { NavContainer, StyledAnchor  } from './styles';
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
// eslint-disable-next-line
const tabData = [
    { title: 'wallet', key: '/wallet' },
    { title: 'about', key: '/about' },
    { title: 'Coins', key: '/coins' },
]