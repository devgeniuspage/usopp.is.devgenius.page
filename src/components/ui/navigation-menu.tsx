import React from 'react'
import styled from 'styled-components'

const Menu = styled.nav`
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(3, minmax(160px, 1fr));
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

const Item = styled.a`
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

type MenuProps = React.PropsWithChildren<{
  className?: string
}>

export function NavigationMenu({ children, className }: MenuProps) {
  return <Menu className={className}>{children}</Menu>
}

type ItemProps = {
  href: string
  icon?: React.ReactNode
  children: React.ReactNode
}

export function NavigationItem({ href, icon, children }: ItemProps) {
  return (
    <Item href={href}>
      <IconCircle>{icon}</IconCircle>
      <span>{children}</span>
    </Item>
  )
}

