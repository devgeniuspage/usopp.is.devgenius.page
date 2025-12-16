import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.main`
  min-height: 100vh;
  background: #1e90ff;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
`

const Card = styled.section`
  width: 100%;
  max-width: 880px;
  display: grid;
  gap: 24px;
`

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
`

const Subtitle = styled.p`
  font-size: 18px;
  opacity: 0.9;
`

const Actions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`

const Action = styled.a`
  background: #ffffff;
  color: #1e90ff;
  border-radius: 8px;
  padding: 10px 14px;
  font-weight: 600;
`

const Tags = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`

const Tag = styled.li`
  background: rgba(255, 255, 255, 0.18);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 14px;
`

const IndexPage: React.FC = () => {
  const skills = ['Gatsby', 'React', 'TypeScript', 'Styled-Components', 'SEO', 'SSG']
  return (
    <Wrapper>
      <Card>
        <Title>안녕하세요, USOPP입니다ㅋㅋ</Title>
        <Subtitle>프론트엔드 개발자 포트폴리오</Subtitle>
        <Actions>
          <Action href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </Action>
          <Action href="mailto:hello@example.com">Email</Action>
          <Action href="/resume.pdf">Resume</Action>
        </Actions>
        <Tags>{skills.map((s) => <Tag key={s}>{s}</Tag>)}</Tags>
      </Card>
    </Wrapper>
  )
}

export default IndexPage
