import styled from 'styled-components';
import ButtonFired from '../ButtonFired';
import Container from '../tools/container';

 export const HeaderFired = styled.header`
    
    padding: 15rem 0;
    background-color: var(--color-black-dark);
    border-bottom: 4px solid #ED254E;
    
    
    
`;

export const Wrapper = styled.div`
    ${Container};
    display:flex;
    justify-content:space-between;
    align-items: center;
    
    @media (max-width:800px){
        justify-content:center;
        padding:15rem 16rem;
    & > ${ButtonFired}{
        position:fixed;
        right:0;
        left:0;
        bottom:0;
        width:100%;
        border:0;
        border-radius:0;
        background-color:var(--color-frontend);
    }
    
    }


`;