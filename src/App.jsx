import React from 'react';
import {HeaderFired,Wrapper} from './components/HeaderFired';
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
      <Wrapper>
        <LogoFired />
        <ButtonFired>Novo Video</ButtonFired>
      </Wrapper>
    </HeaderFired>
    <Banner>
      <Text>
        <TagVasco>Ribagol</TagVasco>
        <Title>Ribamar: incrível talento para perder gols</Title>
        <Description>
        Lucas Ribamar Lopes dos Santos Bibiano, mais conhecido apenas como Ribamar (Rio de Janeiro, 21 de maio de 1997), é um futebolista brasileiro que atua como atacante. Atualmente joga no Vasco da Gama.
         
        </Description>
      </Text>
      <ThumbVasco src={ribameme}  />
    </Banner>
    <FooterVasco>
      <LogoFired />
      <p>
        Site feito na <a href="https://www.alura.com.br"><LogoImersao /></a> por <LinkPerson href="https://www.instagram.com/mikaelvsouza/?hl=pt-br">Mikael Vieira</LinkPerson>
      </p>
    </FooterVasco>
    </>
     
      );
}

export default App;
