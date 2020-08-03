import styled from 'styled-components';

const ButtonFired = styled.button`
    font-family:'Roboto' , sans-serif;
    padding: 14px 35px;
    text-decoration:none;
    background-color: var(--color-black-dark);
    color: var(--color-gray-light);
    border: 1px solid var(--color-gray-light);
    border-radius: 4px;
    font-size: 18rem;
    cursor: pointer;
    transition: opacity 300ms linear ;
    &:hover{
        opacity:0.6;
    }
   
    
    
  

`;

export default ButtonFired;