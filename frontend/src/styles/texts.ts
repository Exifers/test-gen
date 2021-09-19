import styled from '@emotion/styled'
import { Link as ReactRouterLink } from 'react-router-dom'
import { COLORS } from './colors'

export const LargeHeader = styled.h1`
  font-size: 32px;
`

export const MediumHeader = styled.h2`
  font-size: 24px;
`

export const SmallHeader = styled.h3`
  font-size: 20px;
`

export const Text = styled.div`
  font-size: 14px;
`

export const Link = styled(ReactRouterLink)`
  color: ${COLORS.BLUE};
  font-weight: 700;
  text-decoration: none;
`
