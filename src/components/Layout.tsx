import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from './Header'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html, body, #___gatsby, #gatsby-focus-wrapper { height: 100%; }
  body { margin: 0; font-family: 'Noto Sans JP', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif; background: #f7f9fc; color: #0b1f3f; }
  a { color: inherit; text-decoration: none; }
  img { max-width: 100%; display: block; }
  :root { --header-height: 200px; }
`

const Main = styled.main`
  min-height: calc(100vh - 140px);
  padding-top: var(--header-height, 200px);
`

const FooterWrap = styled.footer`
  background: #0b1f3f;
  color: #fff;
  border-top: 4px solid #ffcc00;
`

const FooterInner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 20px;
  font-size: 14px;
  opacity: 0.9;
`

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>{children}</Main>
      <FooterWrap>
        <FooterInner>© {new Date().getFullYear()} USOPP Portfolio</FooterInner>
      </FooterWrap>
    </>
  )
}
