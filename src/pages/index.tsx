import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { Container } from '../components/ui/container'
import { Separator } from '../components/ui/separator'
import { Input } from '../components/ui/input'
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { ProjectCard } from '../components/ui/project-card'
import projects from '../data/projects'

const Section = styled.section`
  padding: 120px 0 60px;
  
  h1 {
    font-size: 2.9rem;
    font-weight: 800;
    line-height: 3.5rem;
  }
    
  h2 {
    font-size: 1.15rem;
    font-weight: 500;
    line-height: 2rem;
  }
`

const SectionTitle = styled.h2`
  font-size: 2.5rem !important;
  font-weight: 700 !important;
  margin-bottom: 10px;
`
const SectionSubtitle = styled.p`
  font-size: 1.2rem !important;
  margin-bottom: 30px;
  color: var(--text-muted);
`

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 450px;
  gap: 32px;
  align-items: center;
`

const ProfileCard = styled(Card)`
  padding: 25px 0;
`

const Avatar = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 24px;
  background: linear-gradient(135deg, #355eff 0%, #a855f7 100%);
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: 800;
`

const Value = styled.span`
  display: inline-block;
  font-size: 1.2rem;
`

const Row = styled.div`
`

const MutedLink = styled.a`
  color: var(--link);
  text-decoration: none;
  &:hover { color: var(--link-hover); }
`

const ProjectCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Section>
          <TwoColumn>
            <div>
              <h1>안녕하세요.<br />김건위(@Usopp)입니다.</h1>
              <h2>화면에 가치를 담고 싶어하는 <b>프론트엔드 개발자</b>로<br/>사용자가 마주하는 모든 순간을 의미있게 만들고 있습니다.</h2>
            </div>
            <ProfileCard>
              <CardContent>
                <Avatar>U</Avatar>
                <Row>
                  <Value>김건위(@Usopp)</Value>
                </Row>
                <Row>
                  <Value>
                    <MutedLink href="mailto:usopp@danbeeinc.com">usopp@danbeeinc.com</MutedLink>
                  </Value>
                </Row>
                <Row>
                  <Value>프론트엔드 개발</Value>
                </Row>
                <Row>
                  <Value>
                    <Badge>danbee inc.</Badge>
                  </Value>
                </Row>
              </CardContent>
              <CardFooter></CardFooter>
            </ProfileCard>
          </TwoColumn>
      </Section>
      <Section>
        <SectionTitle id="projects">Projects</SectionTitle>
        <SectionSubtitle>Here are some of my projects.</SectionSubtitle>
        <ProjectCardContainer>
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              imageUrl={project.imageUrl}
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </ProjectCardContainer>
      </Section>
    </Layout>
  );
}

export default IndexPage
