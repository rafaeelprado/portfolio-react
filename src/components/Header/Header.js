import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { RiSeparator } from 'react-icons/ri';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
         <img src="./images/logo.svg" style={{ height: "5rem", width: "5rem"}}/>         
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>        
      </li>
      <RiSeparator style={{ marginTop: 8 }}/>      
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li> 
      <RiSeparator style={{ marginTop: 8 }}/>  
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <RiSeparator style={{ marginTop: 8 }}/>
      <li>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>            
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/rafaeelprado">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/rafapsd">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="#">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
