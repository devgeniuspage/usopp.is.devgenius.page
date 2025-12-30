import React from 'react'
import styled, { css } from 'styled-components'

type Variant = 'default' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const stylesByVariant = {
  default: css`
    background: #0b1f3f;
    color: #ffffff;
    border: 1px solid rgba(255,255,255,0.12);
  `,
  secondary: css`
    background: #ffffff;
    color: #0b1f3f;
    border: 1px solid rgba(0,0,0,0.12);
  `,
  ghost: css`
    background: transparent;
    color: #0b1f3f;
    border: 1px solid transparent;
  `,
}

const stylesBySize = {
  sm: css`
    height: 32px;
    padding: 0 10px;
    font-size: 13px;
    border-radius: 8px;
  `,
  md: css`
    height: 40px;
    padding: 0 14px;
    font-size: 14px;
    border-radius: 10px;
  `,
  lg: css`
    height: 48px;
    padding: 0 16px;
    font-size: 15px;
    border-radius: 12px;
  `,
}

const Root = styled.button<{ $variant: Variant; $size: Size }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 600;
  transition: opacity .12s ease, transform .12s ease, box-shadow .12s ease;
  ${({ $variant }) => stylesByVariant[$variant]}
  ${({ $size }) => stylesBySize[$size]}
  &:hover { opacity: .95; transform: translateY(-1px); }
  &:active { transform: translateY(0); }
`

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
}

export function Button({ variant = 'default', size = 'md', ...rest }: Props) {
  return <Root $variant={variant} $size={size} {...rest} />
}

