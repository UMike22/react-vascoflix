import React from 'react';
import HeaderFired from './components/HeaderFired';
import LogoFired from './components/LogoFired';
import ButtonFired from './components/ButtonFired';
import FooterVasco from './components/FooterVasco';
import LinkPerson from './components/Link/link';
import LogoImersao from './components/LogoImersao';
import {Banner,Text} from './components/BannerFront';
import TagVasco from './components/TagVascoFlix';
import Title from './components/TittleVascoFlix';
import Description from './components/description';
import ThumbVasco from './components/ThumbVasco';
import ribameme from './assets/img/ribameme.jpg'
function App() {
  return (
    <>
    <HeaderFired>
      <LogoFired />
      <ButtonFired>Novo Video</ButtonFired>
    </HeaderFired>
    <Banner>
      <Text>
        <TagVasco>Front End</TagVasco>
        <Title>Ribamar: incrível talento para perder gols</Title>
        <Description>Um mito, uma lenda ,uma besta enjaulada uma maquina de perder gols!</Description>
      </Text>
      <ThumbVasco src={ribameme} />
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
