import styled from 'styled-components';

export const Avatar = styled.img`
position:absolute;
top:10rem;
left:10rem;
width: 32rem;
height: 32rem;
opacity:0;
transform:translateX(-140%);
transition: transform 200ms linear, opacity 100ms linear;
`;
 export const WrapperVasco = styled.figure`
position:relative;
border-radius:4px;
border:1px solid var(--color-gray-light);
width: 640rem;
min-width:45%;
overflow: hidden;
transition:transform  100ms linear;

&:hover{
        transform:translate(-10rem,-10rem);
        
    & > ${Avatar}{
       transform:translateX(0%);
       opacity:1;
       transition:transform 100ms 200ms linear , opacity 300ms linear;

    }
}

`

export const Thumb = styled.img`
 width:100%;
 
`;

