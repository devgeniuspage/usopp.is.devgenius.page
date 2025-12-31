import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Container } from './ui/container'
import { Button } from './ui/button'

const TopBar = styled.header`
  width: fit-content;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 12px 0;
  margin: 0 auto;
`

const Bar = styled.div<{ $compact?: boolean }>`
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 9999px;
  padding: 22px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 6px 24px rgba(0,0,0,0.06);
  width: fit-content;
  transition: width .22s ease;
  overflow: hidden;
  will-change: width;
`

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  min-width: max-content;

  & button {
    font-size: 18px;
    border-radius: 18px;
    cursor: pointer;
  }
`

const BrandIcon = styled.span`
  width: 32px;
  height: 32px;
  border-radius: 9999px;
  background: #1c1f24;
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08);
`

const NavLink = styled.a`
  color: var(--link);
  font-weight: 700;
  font-size: 18px;
  padding: 6px 10px;
  border-radius: 8px;
  transition: color .12s ease, background .12s ease;
  &:hover { color: var(--link-hover); background: var(--hover-bg); }
`

const Links = styled.div<{ $visible: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  transition: opacity .18s ease, transform .18s ease, max-width .22s ease;
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transform: ${(p) => (p.$visible ? 'translateY(0)' : 'translateY(-4px)')};
  pointer-events: ${(p) => (p.$visible ? 'auto' : 'none')};
  overflow: hidden;
  max-width: ${(p) => (p.$visible ? '480px' : '0px')};
`

const IconButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 9999px;
  border: 1px solid var(--border);
  background: var(--muted-bg);
  color: var(--text);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: all .5s ease-in-out;
  &:hover { opacity: .95; transform: translateY(-1px); }
`

export default function Header() {
  const barRef = useRef<HTMLElement | null>(null)
  const prevYRef = useRef<number>(0)
  const [showLinks, setShowLinks] = useState(true)
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof document === 'undefined') return 'light'
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
  })

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

  useEffect(() => {
    prevYRef.current = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      const prev = prevYRef.current
      const threshold = 4
      if (y > prev + threshold) {
        setShowLinks(false)
      } else if (y < prev - threshold) {
        setShowLinks(true)
      }
      prevYRef.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  
  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', next)
    }
    try {
      if (typeof window !== 'undefined') window.localStorage.setItem('theme', next)
    } catch {}
  }

  return (
    <TopBar ref={barRef}>
      <Container>
        <Bar $compact={!showLinks}>
          <Left>
            <BrandIcon>🔥</BrandIcon>
            <Links $visible={showLinks}>
              <NavLink href="#community">About</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#skills">Skills</NavLink>
            </Links>
          </Left>
          <Right>
            <Button variant="default" size="md">Contact</Button>
            <IconButton aria-label="Toggle theme" onClick={toggleTheme}>{theme === 'dark' ? '🌙' : '☀️'}</IconButton>
            <IconButton aria-label="Create">＋</IconButton>
          </Right>
        </Bar>
      </Container>
    </TopBar>
  )
}
