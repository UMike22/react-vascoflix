import styled from 'styled-components';
import ButtonFired from '../ButtonFired';

const HeaderFired = styled.header`
    display:flex;
    justify-content:space-between;
    padding: 30px 40px;
    background-color: var(--color-black-dark);
    border-bottom: 4px solid #ED254E;
    @media (max-width:800px){
        justify-content:center;
        padding:15px 16px;
    & > ${ButtonFired}{
        position:fixed;
        right:0;
        left:0;
        bottom:0;
        width:100vw;
        border:o;
        border-radius:0;
        background-color:var(--color-primary-medium);
    }
    
    }
`;

export default HeaderFired;