import React from 'react';
import HeaderFired from './components/HeaderFired';
import LogoFired from './components/LogoFired';
import ButtonFired from './components/ButtonFired';
import FooterVasco from './components/FooterVasco';
import LinkPerson from './components/Link/link';
import LogoImersao from './components/LogoImersao';
import Banner from './components/BannerFront';
import TagVasco from './components/TagVascoFlix';

function App() {
  return (
    <>
    <HeaderFired>
      <LogoFired />
      <ButtonFired>Novo Video</ButtonFired>
    </HeaderFired>
    <Banner>
      <TagVasco>Front End</TagVasco>
    </Banner>
    <FooterVasco>
      <LogoFired />
      <p>
        Site feito na por  <a href="https://www.alura.com.br"><LogoImersao /></a> <LinkPerson href="https://www.instagram.com/mikaelvsouza/?hl=pt-br">Mikael Vieira</LinkPerson>
      </p>
    </FooterVasco>
    </>
     
      );
}

export default App;
