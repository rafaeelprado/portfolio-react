import React from 'react';

import { ButtonDiv, Section, SectionSubText, SectionSubText2, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import Button2 from '../../styles/GlobalComponents/Button2';
import { GoLinkExternal } from 'react-icons/go';
import { LeftSection } from './HeroStyles';
import Link from 'next/link';


const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>         
          Hello, I'm <br />          
          Rafael Prado          
        </SectionTitle>
        <SectionSubText2 className="typing-demo">
          Front-end Developer
        </SectionSubText2>
        <SectionText>
        My current stack includes: JavaScript, React.js, Next.js, Git, HTML5, CSS3, TailwindCSS. I have a good experience with graphic softwares like Figma, Illustrator and Photoshop.
        </SectionText>
        <ButtonDiv>
        <Link href="#contact">        
        <Button>Contact Me</Button>     
        </Link> 
        <Link href="https://drive.google.com/file/d/1LE8HYWvo007rKD3z2DQivKXHzNeJ56lD/view?usp=sharing" target="_blank">            
        <Button2>Download CV&nbsp;<GoLinkExternal/> </Button2>
        </Link>
        </ButtonDiv>
      </LeftSection>
    </Section>
  </>
);

export default Hero;