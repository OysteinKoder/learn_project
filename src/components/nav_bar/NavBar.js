import React from 'react';
import { NavContainer } from './styles';
import { StyledTabs } from './styles';

export const NavBar = ()=> {
const tabsData = [
    {title: 'Trading', key: 'Trading'},
    {title: 'Wallet', key:'Wallet'},
]
    return(
<NavContainer>
<StyledTabs data={tabsData} />
</NavContainer>
    )
}