import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  height: 1px;
  width: 100%;
  background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.18) 12%, rgba(0,0,0,0.18) 88%, rgba(0,0,0,0) 100%);
  box-shadow: 0 1px 0 rgba(255,255,255,0.12);
`

type Props = {
  className?: string
}

export function Separator({ className }: Props) {
  return <Root className={className} />
}

