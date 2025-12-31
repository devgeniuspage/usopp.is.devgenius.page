import React from 'react'
import styled from 'styled-components'

const Root = styled.article`
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  color: var(--text);
  display: flex;
  flex-direction: column;
  transition: transform .12s ease, box-shadow .12s ease, opacity .12s ease;
  &:hover { transform: translateY(-2px); box-shadow: 0 6px 22px rgba(0,0,0,0.08); opacity: .98; }
  display: flex;
  align-items: center;
  justify-content: center;
`

const Header = styled.div`
  padding: 16px 16px 0;
  display: grid;
  gap: 10px;
`

const Title = styled.h3`
  font-size: 18px;
  font-weight: 800;
`

const Description = styled.p`
  font-size: 13px;
  opacity: .9;
`

const Content = styled.div`
  width:100%;
  padding: 12px 16px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const Footer = styled.div`
  padding: 12px 16px 16px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  border-top: 1px solid var(--border);
`

type CardProps = React.PropsWithChildren<{ className?: string }>
type HeaderProps = React.PropsWithChildren<{ className?: string }>
type TitleProps = React.PropsWithChildren<{ className?: string }>
type DescriptionProps = React.PropsWithChildren<{ className?: string }>
type ContentProps = React.PropsWithChildren<{ className?: string }>
type FooterProps = React.PropsWithChildren<{ className?: string }>

export function Card({ children, className }: CardProps) {
  return <Root className={className}>{children}</Root>
}

export function CardHeader({ children, className }: HeaderProps) {
  return <Header className={className}>{children}</Header>
}

export function CardTitle({ children, className }: TitleProps) {
  return <Title className={className}>{children}</Title>
}

export function CardDescription({ children, className }: DescriptionProps) {
  return <Description className={className}>{children}</Description>
}

export function CardContent({ children, className }: ContentProps) {
  return <Content className={className}>{children}</Content>
}

export function CardFooter({ children, className }: FooterProps) {
  return <Footer className={className}>{children}</Footer>
}
