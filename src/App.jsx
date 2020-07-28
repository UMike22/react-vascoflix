import React from 'react';
import HeaderFired from './components/HeaderFired';
import LogoFired from './components/LogoFired';
import ButtonFired from './components/ButtonFired';
import FooterVasco from './components/FooterVasco';
import LinkPerson from './components/Link/link';
import ToStrong from './components/ToStrong';

function App() {
  return (
    <>
    <HeaderFired>
      <LogoFired />
      <ButtonFired>Novo Video</ButtonFired>
    </HeaderFired>
    <FooterVasco>
      <LogoFired />
      <p>
        Site feito na <ToStrong>#ImersaoReact</ToStrong> por <LinkPerson href="https://www.instagram.com/mikaelvsouza/?hl=pt-br">Mikael Vieira</LinkPerson>
      </p>
    </FooterVasco>
    </>
     
      );
}

export default App;
