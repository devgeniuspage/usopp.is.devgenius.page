import React from 'react'
import styled from 'styled-components'

const Root = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  padding: 0 8px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 700;
  color: #0b1f3f;
  background: #f0f4fb;
  border: 1px solid #e7edf6;
`

type Props = {
  children: React.ReactNode
  className?: string
}

export function Badge({ children, className }: Props) {
  return <Root className={className}>{children}</Root>
}

