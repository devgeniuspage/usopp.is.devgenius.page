import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from './Header'
import { AmbientParticles } from './AmbientParticles'
import { Container } from './ui/container'

const GlobalStyle = createGlobalStyle`
  html, body, #___gatsby, #gatsby-focus-wrapper { height: 100%; }
  body { margin: 0; font-family: 'Noto Sans JP', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif; background: var(--bg); color: var(--text); }
  a { color: inherit; text-decoration: none; }
  img { max-width: 100%; display: block; }
  :root {
    --header-height: 200px;
    --bg: #f7f9fc;
    --text: #0b1f3f;
    --text-muted: #5a6b85;
    --card-bg: #ffffff;
    --border: #e7edf6;
    --muted-bg: #f0f4fb;
    --link: #5a6b85;
    --link-hover: #0b1f3f;
    --hover-bg: #f5f8fd;
  }
  [data-theme="dark"] {
    --bg: #000000ff;
    --text: #e6edf7;
    --card-bg: #121826;
    --border: #2a3340;
    --muted-bg: #1a2233;
    --link: #cbd5e1;
    --link-hover: #ffffff;
    --hover-bg: rgba(255,255,255,0.06);
  }
`

const Main = styled.main`
  min-height: calc(100vh - 140px);
  padding-top: var(--header-height, 200px);
  width: 70%;
  max-width: 1200px;
  margin: 0 auto;
  color: var(--text);
`

const FooterWrap = styled.footer`
`

const FooterInnerText = styled.div`
  padding: 20px 0;
  font-size: 14px;
  opacity: 0.9;
`

export default function Layout({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('theme') : null
    const initial = saved === 'dark' || saved === 'light' ? saved : 'light'
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', initial)
    }
  }, [])
  return (
    <>
      <GlobalStyle />
      <AmbientParticles />
      <Header />
      <Main>{children}</Main>
      <FooterWrap>
        <Container>
          <FooterInnerText>© {new Date().getFullYear()} USOPP Portfolio</FooterInnerText>
        </Container>
      </FooterWrap>
    </>
  )
}
