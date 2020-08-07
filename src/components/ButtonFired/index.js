import styled from 'styled-components';

const ButtonFired = styled.button`
    font-family:'Roboto' , sans-serif;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    padding: 14px 35px;
    text-decoration:none;
    background-color: var(--color-black-dark);
    color: var(--color-gray-light);
    border: 1px solid var(--color-gray-light);
    border-radius: 4px;
    font-size: 18rem;
    cursor: pointer;
    
    overflow: hidden;
    
    &::before{
        content:'';
        position:absolute;
        top:0;
        left:0;
        background-color:#ED254E;
        border-radius:4px;
        width:100%;
        height:100%;
        display:block;
        transition: transform 200ms linear;
        transform:translateX(-100% )
    }
    &::after{
        content:'Novo Video';
        position:absolute;
    }
    
    &:hover{
        &::before{
            transform:translateX(0%)
        }
    }
   
    
    
  

`;

export default ButtonFired;