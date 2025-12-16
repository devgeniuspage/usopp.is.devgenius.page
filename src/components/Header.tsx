import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const TopBar = styled.div<{ $scrolled?: boolean }>`
  background: linear-gradient(135deg, #0033ffff 0%, #0033ffff 30%, #355effff 65%, #355effff 85%, #355effff 100%);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: ${(p) => (p.$scrolled ? '10px 16px 12px' : '24px 20px 36px')};
  border-bottom: 1px solid rgba(0,0,0,0.2);
  box-shadow: inset 0 -1px 0 rgba(255,255,255,0.08);
  transition: all 0.15s ease-in-out;
`

const Container = styled.div`
  padding: 0 110px;
  margin: 0 auto;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
`

const GnbContainer = styled.div`
  padding: 0 110px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const LogoWrap = styled.div`
  grid-column: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LogoImg = styled.img<{ $scrolled?: boolean }>`
  width: ${(p) => (p.$scrolled ? '72px' : '132px')};
  height: ${(p) => (p.$scrolled ? '72px' : '132px')};
  object-fit: contain;
  filter: drop-shadow(0 3px 3px rgba(0,0,0,0.28));
`

const SNSWrap = styled.div<{ $scrolled?: boolean }>`
  grid-column: 3;
  display: flex;
  display: ${(p) => (p.$scrolled ? 'none' : 'flex')};
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  font-weight: 800;
  font-size: 11px;
  text-transform: uppercase;
  opacity: 0.9;
`

const Icons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  a {
    width: 26px;
    height: 26px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: rgba(255,255,255,0.16);
    color: #fff;
    backdrop-filter: blur(1px);
    border: 1px solid rgba(255,255,255,0.25);
    img { width: 18px; height: 18px; }
  }
`

const Separator = styled.div<{ $scrolled?: boolean }>`
  max-width: 1120px;
  margin: ${(p) => (p.$scrolled ? '8px auto 6px' : '16px auto 10px')};
  height: 1px;
  background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 10%, rgba(0,0,0,0.25) 90%, rgba(0,0,0,0) 100%);
  box-shadow: 0 1px 0 rgba(255,255,255,0.1);
`

const CompactRow = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 18px;
  padding: 6px 4px 10px;
`

const Gnb = styled.nav`
  margin-top: 18px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 18px;
  align-items: center;
  justify-items: center;
  width: 100%;
  @media (max-width: 960px) {
    grid-template-columns: repeat(3, minmax(160px, 1fr));
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, minmax(160px, 1fr));
  }
`

const GnbItem = styled.a`
  display: grid;
  grid-template-columns: 56px auto;
  align-items: center;
  gap: 16px;
  background: transparent;
  color: #ffffff;
  padding: 8px 12px;
  border-radius: 12px;
  font-weight: 800;
  min-height: 64px;
  transition: opacity .12s ease, transform .12s ease;
  span { font-size: 16px; letter-spacing: .02em; }
  &:hover { opacity: .95; transform: translateY(-1px); }
`

const IconCircle = styled.span`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #b13f39;
  font-size: 24px;
`

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const barRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const updateOnce = () => {
      const h = barRef.current?.offsetHeight ?? 0
      if (h > 0) {
        document.documentElement.style.setProperty('--header-height', `${h}px`)
      }
    }
    requestAnimationFrame(updateOnce)
    const onResize = () => requestAnimationFrame(updateOnce)
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <TopBar ref={barRef} $scrolled={scrolled}>
      {scrolled ? (
        <CompactRow>
          <LogoImg src="/op-logo.svg" alt="USOPP" $scrolled />
          <Gnb>
            {/* <GnbItem href="#news"><IconCircle>📰</IconCircle><span>최신정보</span></GnbItem> */}
            <GnbItem href="#about"><IconCircle>🎩</IconCircle><span>USOPP 소개</span></GnbItem>
            <GnbItem href="#features"><IconCircle>📦</IconCircle><span>프로젝트</span></GnbItem>
            <GnbItem href="#events"><IconCircle>🔥</IconCircle><span>기술스택</span></GnbItem>
            {/* <GnbItem href="#links"><IconCircle>🛍️</IconCircle><span>링크</span></GnbItem>
            <GnbItem href="#search"><IconCircle>🔎</IconCircle><span>검색</span></GnbItem> */}
          </Gnb>
        </CompactRow>
      ) : (
        <>
          <Container>
            <div />
            <LogoWrap>
              <LogoImg src="/op-logo.svg" alt="USOPP" />
            </LogoWrap>
            <SNSWrap>
              <span>Official SNS</span>
              <Icons>
                <a href="https://x.com" aria-label="X"><img src="/icons/x.svg" alt="X" /></a>
                <a href="https://instagram.com" aria-label="Instagram"><img src="/icons/instagram.svg" alt="Instagram" /></a>
                <a href="https://line.me" aria-label="LINE"><img src="/icons/line.svg" alt="LINE" /></a>
                <a href="https://youtube.com" aria-label="YouTube"><img src="/icons/youtube.svg" alt="YouTube" /></a>
                <a href="https://www.tiktok.com" aria-label="TikTok"><img src="/icons/tiktok.svg" alt="TikTok" /></a>
              </Icons>
            </SNSWrap>
          </Container>
          <Separator />
          <GnbContainer>
            <Gnb>
              {/* <GnbItem href="#news"><IconCircle>📰</IconCircle><span>최신정보</span></GnbItem> */}
              <GnbItem href="#about"><IconCircle>🎩</IconCircle><span>USOPP 소개</span></GnbItem>
              <GnbItem href="#features"><IconCircle>📦</IconCircle><span>프로젝트</span></GnbItem>
              <GnbItem href="#events"><IconCircle>🔥</IconCircle><span>기술스택</span></GnbItem>
              {/* <GnbItem href="#links"><IconCircle>🛍️</IconCircle><span>링크</span></GnbItem> */}
              {/* <GnbItem href="#search"><IconCircle>🔎</IconCircle><span>검색</span></GnbItem> */}
            </Gnb>
          </GnbContainer>
        </>
      )}
    </TopBar>
  )
}
