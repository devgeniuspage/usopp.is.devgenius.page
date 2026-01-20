import React from 'react';
import styled from 'styled-components';
import { Badge } from './badge';

const ProjectCardRoot = styled.article`
  background: var(--card-bg);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  &:hover { 
   cursor: pointer;
  }
`;

const ProjectImageWrapper = styled.div`
  height: 350px;
  overflow: hidden;
  border-bottom: 1px solid var(--border);
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease-in-out;

  ${ProjectCardRoot}:hover & {
    transform: scale(1.2);
  }
`;

const ProjectContent = styled.div`
  padding: 0 20px 20px 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 26px;
  font-weight: 800;
  color: var(--text);
  margin-bottom: 5px;
`;

const ProjectDescription = styled.p`
  font-size: 18px;
  color: var(--text-muted);
  margin-bottom: 16px;
  margin-top: 0;
`;

const ProjectTags = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

type ProjectCardProps = {
  imageUrl?: string;
  title: string;
  description: string;
  tags: string[];
};

export function ProjectCard({ imageUrl, title, description, tags }: ProjectCardProps) {
  return (
    <ProjectCardRoot>
      <ProjectImageWrapper>
        <ProjectImage src={imageUrl} />
      </ProjectImageWrapper>
      <ProjectContent>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectTags>
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </ProjectTags>
      </ProjectContent>
    </ProjectCardRoot>
  );
}
