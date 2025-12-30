import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
`

type Props = React.PropsWithChildren<{
  className?: string
  as?: any
}>

export function Container({ children, className, as }: Props) {
  return (
    <Root as={as} className={className}>
      {children}
    </Root>
  )
}

