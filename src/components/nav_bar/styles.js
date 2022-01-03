import Styled from "styled-components";
import { Section } from '@dnb/eufemia';
import { Link } from "react-router-dom";

export const NavContainer = Styled.div`
margin: auto;
display: flex;
justify-content: space-evenly;
background-color: var(--color-sea-green);
width: 100%;
height: 100%;

`;

export const StyledTabs = Styled.div`
display: flex;
justify-content: space-evenly;
width: 100%;
`;

export const StyledSection = Styled(Section)`
width: 100% !important;

`

export const StyledAnchor = Styled(Link)`
color: var(--color-mint-green);
text-decoration: none;
font-family: 'DNB', sans-serif;
font-size: 2rem;
font-weight: var(--font-weight-medium);
padding: 0.5rem;
margin-top: 1rem;
margin-bottom: 1rem;
border: var(--color-mint-green) solid 3px;
box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
border-radius: 25px;

&:hover {
    transform: scale(1.1);
}
`


export default null;