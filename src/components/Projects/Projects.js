import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { DiFirebase } from 'react-icons/di';
import { FiExternalLink } from 'react-icons/fi';
import { projects } from '../../constants/constants';
import { Button } from '../Technologies/TechnologiesStyles';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <TitleContent className="card-info">{p.cs}</TitleContent>
              <Hr />
            </TitleContent>            
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <br/>
              <TitleContent><DiFirebase size="1.3rem" />Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Button><Tag key={i}>{t}</Tag></Button>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.visit}>Demo <FiExternalLink/></ExternalLinks>
              <ExternalLinks href={p.source}>Github <FiExternalLink/></ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;