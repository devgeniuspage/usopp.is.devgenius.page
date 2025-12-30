import React from 'react'
import styled from 'styled-components'

const Root = styled.article`
  background: #ffffff;
  border: 1px solid #e7edf6;
  border-radius: 12px;
  padding: 16px;
  display: grid;
  gap: 10px;
  color: #0b1f3f;
  transition: transform .12s ease, box-shadow .12s ease, opacity .12s ease;
  &:hover { transform: translateY(-2px); box-shadow: 0 6px 22px rgba(0,0,0,0.08); opacity: .98; }
`

const Title = styled.h3`
  font-size: 16px;
  font-weight: 800;
`

const Subtitle = styled.p`
  font-size: 13px;
  opacity: .9;
`

const Footer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`

type Props = {
  title: string
  subtitle?: string
  children?: React.ReactNode
  className?: string
}

export function Card({ title, subtitle, children, className }: Props) {
  return (
    <Root className={className}>
      <Title>{title}</Title>
      {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
      {children ? <Footer>{children}</Footer> : null}
    </Root>
  )
}

