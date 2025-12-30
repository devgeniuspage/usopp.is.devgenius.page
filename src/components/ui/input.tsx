import React from 'react'
import styled from 'styled-components'

const Root = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 12px;
  border-radius: 10px;
  border: 1px solid #d8e3f1;
  background: #ffffff;
  color: #0b1f3f;
  font-size: 14px;
  outline: none;
  transition: border-color .12s ease, box-shadow .12s ease;
  &:focus {
    border-color: #355effff;
    box-shadow: 0 0 0 3px rgba(53, 94, 255, 0.18);
  }
`

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

export function Input(props: Props) {
  return <Root {...props} />
}

