import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { RiMailSendLine, RiWhatsappLine } from 'react-icons/ri';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle><RiWhatsappLine size="1.2rem"/> WhatsApp</LinkTitle>
          <LinkItem href="https://api.whatsapp.com/send?phone=5579999148911&text=Ol%C3%A1!">+55 79 99914-8911</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle><RiMailSendLine size="1.2rem"/> Email</LinkTitle>
          <LinkItem href="mailto:rafapsd@gmail.com">
            rafapsd@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>© 2022 Rafael Prado</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/rafaeelprado">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/rafapsd">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="#">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
