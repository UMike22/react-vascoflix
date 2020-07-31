import styled from 'styled-components'
import Container from '../tools/container';
import Description from '../description';
import Title from '../TittleVascoFlix';


 export const Banner = styled.section`
    margin:60rem 40rem;
    max-height: 70vh;
    display:flex;
    justify-content:space-between;
    ${Container};
    height: 70vh;
    align-items:center;
    
    



`;
 export const Text = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
padding-top: 10rem;
max-width:400rem;

& > ${Description}{
        padding-top:19rem;
    } 
& > ${Title}{
    padding-top: 40rem;
}
`;

