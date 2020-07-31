import styled from 'styled-components'
import LogoFired from '../LogoFired';

const FooterVasco = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16rem;
    background-color: var(--color-black-dark);
    color: var(--color-gray-light);
    border-top: 4px solid var(--color-gray-light);
    padding: 20rem 0;
    font-weight:300;
    height:80rem;

    & > ${LogoFired} {
        margin-bottom:15rem;
    }

    



`
export  default   FooterVasco;