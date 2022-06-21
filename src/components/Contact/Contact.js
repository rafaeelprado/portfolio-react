import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { ContactUs } from './ContactStyles';



const Contact = () =>  (
    <Section id="contact">     
      <SectionTitle>Get In Touch</SectionTitle>
      <SectionText>
      I'm waiting for your message, you can send me an email, call me, or send me a message right here.
      </SectionText>
      <ContactUs/>      
    </Section>
  );


  
  
  export default Contact;