import styled from 'styled-components'
import LogoFired from '../LogoFired';

const FooterVasco = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16rem;
    background-color: var(--color-black-dark);
    color: var(--color-gray-light);
    padding: 20rem 0;
    border-top: 4px solid var(--color-red-border);
    font-weight:300;

    & > ${LogoFired} {
        margin-bottom:20rem;
    }

    @media (max-width:800px){
        display:none;
    }



`
export  default   FooterVasco;