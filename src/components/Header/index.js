import React from 'react';
import { Container, Picture, Title, Subtitle, Image } from './styles';
const img = require('../../images/eu.jpg');
var nome = 'Gabriel Dias Santiago';
var sub = 'Desenvolvedor de software e Designer UI e UX'



export default function Header({ picture, title, subtitle, Image, }) {
  return (
    <Container>
      <Picture background={img} />
      <Title> {nome} </Title>
      <Subtitle> {sub} </Subtitle>
    </Container>
  )
}
