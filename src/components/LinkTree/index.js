import React from 'react';
import { Container, Name } from './styles';
import Button from '../Button';
import variables from '../../variables';
import Header from '../Header';

const facebookLogo = require('../../images/facebook.svg');
const githubLogo = require('../../images/github.svg');
const youtubeLogo = require('../../images/youtube.svg');
const instagramLogo = require('../../images/instagram.svg');
const linkedinLogo = require('../../images/linkedin-in.svg');
const reactLogo = require('../../images/react.svg');
const twitterLogo = require('../../images/twitter.svg');
const whatsappLogo = require('../../images/whatsapp.svg');
export default function LinkTree() {
  return (
    <Container>
      <Header picture='https://scontent.fgvr2-1.fna.fbcdn.net/v/t31.0-8/p960x960/13710496_10209793534625506_2997078028056513758_o.jpg?_nc_cat=107&_nc_sid=7aed08&_nc_ohc=CT0MJiwW7cYAX-DuiSm&_nc_ht=scontent.fgvr2-1.fna&_nc_tp=6&oh=f10204fc396130e703c690b8be97f3c2&oe=5E94D2C2' title='Daniel Gomes Pereira' subtitle='A Brazilian Frontend Developer' />
      <Button link='https://www.facebook.com/gabrieldiassantiago09/' icon={facebookLogo} name='Facebook' backgroundColor={variables.facebookColor} />
      <Button link='https://www.instagram.com/_dias17y/' icon={instagramLogo} name='Instagram' backgroundColor={variables.instagramColor} />
      <Button link='https://github.com/gabrieldiassantiago' icon={githubLogo} name='Github' backgroundColor={variables.githubColor} />
      <Button link='https://wa.me/5512981668260' icon={whatsappLogo} name='Whatsapp' backgroundColor={variables.whatsappColor} />
      <Button link='https://github.com/gabrieldiassantiago' icon={reactLogo} name='Site Oficial' backgroundColor={variables.opt2Color} />
      <Button link='https://www.linkedin.com/in/gabriel-dias-santiago-a584701b8/' icon={linkedinLogo} name='LinkedIn' backgroundColor={variables.linkedinColor} />
    </Container>
      )
}