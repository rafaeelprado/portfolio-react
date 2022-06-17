import React from 'react';

import { Section, SectionSubText, SectionSubText2, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
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
        <Link href="#contact">
        <Button>Contact Me</Button>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;