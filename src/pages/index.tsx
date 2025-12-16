import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'

const Hero = styled.section`
  background: radial-gradient(1200px 480px at 20% 0%, #0b1f3f 0, #183763 40%, #22457f 70%, #26579f 100%);
  color: #ffffff;
  padding: 64px 24px;
`

const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`

const HeroInner = styled.div`
  display: grid;
  gap: 16px;
  align-items: center;
  justify-items: start;
`

const Title = styled.h1`
  font-size: 44px;
  font-weight: 800;
  letter-spacing: 0.3px;
`

const Subtitle = styled.p`
  font-size: 18px;
  opacity: 0.92;
`

const Actions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`

const Action = styled.a`
  background: #ffcc00;
  color: #0b1f3f;
  border-radius: 8px;
  padding: 10px 14px;
  font-weight: 700;
`

const Section = styled.section`
  padding: 36px 24px;
`

const TagSection = styled(Section)`
  height: 150px;
  background: #0033ffff;
  display: flex;
  justify-content: center;
  align-items: center;

  & h2 {
    font-size: 275px;
    font-weight: 800;
    color: #ffffff;
    position: relative;
    top: -40px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 800;
  color: #0b1f3f;
`

const NewsCard = styled.article`
  background: #ffffff;
  border: 2px solid #ffcc00;
  border-radius: 12px;
  padding: 16px;
  display: grid;
  gap: 8px;
  color: #0b1f3f;
`

const Grid = styled.ul`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  list-style: none;
  padding: 0;
  margin: 0;
`

const GridCard = styled.li`
  background: #ffffff;
  border: 1px solid #e7edf6;
  border-radius: 10px;
  padding: 14px;
  color: #0b1f3f;
  font-weight: 600;
`

const IndexPage: React.FC = () => {
  const skills = ['Gatsby', 'React', 'TypeScript', 'Styled-Components', 'SEO', 'SSG']
  return (
    <Layout>
      <Section id="move-img">

      </Section>
      <TagSection id="tag">
        <h2>USOPP</h2>
      </TagSection>
      <Section id="news">
        <Container>
          <SectionTitle>NEWS</SectionTitle>
          <NewsCard>
            <strong>チョイ見せ！来週の『ONE PIECE』冒頭をチョイ見せ！</strong>
            <span>2025/12/12</span>
            <span>次号の週刊少年ジャンプ（新年3号）の『ONE PIECE』は休載。再開は新年4・5合併号（12月22日発売）。</span>
          </NewsCard>
        </Container>
      </Section>

      <Section id="features">
        <Container>
          <SectionTitle>FEATURES</SectionTitle>
          <Grid>
            {skills.map((s) => <GridCard key={s}>{s}</GridCard>)}
          </Grid>
        </Container>
      </Section>

      <Section id="links">
        <Container>
          <SectionTitle>LINKS</SectionTitle>
          <Grid>
            <GridCard><a href="https://one-piece.com/index.html" target="_blank" rel="noreferrer">ONE PIECE.com</a></GridCard>
            <GridCard><a href="https://www.danbee.ai" target="_blank" rel="noreferrer">danbee.ai</a></GridCard>
            <GridCard><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a></GridCard>
          </Grid>
        </Container>
      </Section>
    </Layout>
  )
}

export default IndexPage
