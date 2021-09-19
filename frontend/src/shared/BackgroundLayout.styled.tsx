import styled from '@emotion/styled'
import { COLORS } from '../styles/colors'
import { css, Global } from '@emotion/react'
import React from 'react'
import { LargeHeader } from '../styles/texts'
import { BREAKPOINTS } from '../styles/breakpoints'

export const GlobalBackground = () => (
  <Global
    styles={css`
      html {
        background-color: ${COLORS.BLUE_DARK};
      }
    `}
  />
)

type ImageProps = {
  top?: number
  left?: number
  bottom: number
  right: number
}

export const Image = styled.img<ImageProps>`
  position: absolute;
  ${(props) =>
    props.left &&
    css`
      left: ${props.left}px;
    `}

  ${(props) =>
    props.top &&
    css`
      top: ${props.top}px;
    `}
  
  ${(props) =>
    props.bottom &&
    css`
      bottom: ${props.bottom}px;
    `}
  
  ${(props) =>
    props.right &&
    css`
      right: ${props.right}px;
    `}
  
  ${css`
    @media (max-width: ${BREAKPOINTS.MD}px) {
      display: none;
    }
  `}
`

export const Title = styled(LargeHeader)`
  color: ${COLORS.WHITE};
  font-weight: bold;
  text-align: center;
  margin-top: 96px;

  @media (max-width: ${BREAKPOINTS.MD}px) {
    margin-top: 72px;
  }
`
