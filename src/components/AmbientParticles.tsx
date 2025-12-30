import React from 'react'
import styled, { keyframes } from 'styled-components'

const drift = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const flash = keyframes`
  0%, 30%, 100% { opacity: 0; box-shadow: 0 0 0vw 0vw yellow; }
  5% { opacity: 1; box-shadow: 0 0 2vw 0.4vw yellow; }
`

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 50;
  // background: black;
`

const Firefly = styled.span`
  position: fixed;
  left: 50%;
  top: 50%;
  width: 0.4vw;
  height: 0.4vw;
  margin: -0.2vw 0 0 9.8vw;
  animation: ease 200s alternate infinite;
  pointer-events: none;
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transform-origin: -10vw;
  }
  &::before {
    background: black;
    opacity: 0.4;
    animation: ${drift} ease alternate infinite;
    animation-duration: var(--rotation-duration, 10s);
  }
  &::after {
    background: white;
    opacity: 0;
    box-shadow: 0 0 0vw 0vw yellow;
    animation: ${drift} ease alternate infinite, ${flash} ease infinite;
    animation-duration: var(--rotation-duration, 10s), var(--flash-duration, 6000ms);
    animation-delay: 0ms, var(--flash-delay, 500ms);
  }
`

export function AmbientParticles() {
  const quantity = 15
  const keyframesCss = React.useMemo(() => {
    const rand = (min: number, max: number) => Math.random() * (max - min) + min
    let css = ''
    for (let i = 1; i <= quantity; i++) {
      const steps = Math.floor(rand(16, 28))
      const name = `move${i}`
      css += `@keyframes ${name} {`
      for (let step = 0; step <= steps; step++) {
        const pct = (step * (100 / steps)).toFixed(4)
        const tx = (Math.floor(rand(0, 100)) - 50).toString() + 'vw'
        const ty = (Math.floor(rand(0, 100)) - 50).toString() + 'vh'
        const sc = (Math.floor(rand(25, 100)) / 100).toFixed(2)
        css += `${pct}% { transform: translateX(${tx}) translateY(${ty}) scale(${sc}); }`
      }
      css += `}`
    }
    return css
  }, [])

  const items = React.useMemo(() => {
    return Array.from({ length: quantity }).map((_, i) => ({
      key: i + 1,
      moveName: `move${i + 1}`,
      rotationDuration: `${Math.floor(Math.random() * 10) + 8}s`,
      flashDuration: `${Math.floor(Math.random() * 6000) + 5000}ms`,
      flashDelay: `${Math.floor(Math.random() * 8000) + 500}ms`,
    }))
  }, [quantity])

  return (
    <Backdrop>
      <style>{keyframesCss}</style>
      {items.map((it) => (
        <Firefly
          key={it.key}
          style={{
            animationName: it.moveName,
            ['--rotation-duration' as any]: it.rotationDuration,
            ['--flash-duration' as any]: it.flashDuration,
            ['--flash-delay' as any]: it.flashDelay,
          }}
        />
      ))}
    </Backdrop>
  )
}
