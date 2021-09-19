import styled from '@emotion/styled'
import { COLORS } from '../styles/colors'
import { MediumHeader } from '../styles/texts'
import { NavLink as ReactRouterNavLink } from 'react-router-dom'
import { BREAKPOINTS } from '../styles/breakpoints'

export const SidebarOverlay = styled.div`
  position: absolute;
  min-width: 100vw;
  min-height: 100vh;
  z-index: 1;
`

type SidebarContainerProps = {
  isOpen: boolean
}

export const SidebarContainer = styled.div<SidebarContainerProps>`
  width: 240px;
  height: 100vh;
  background-color: ${COLORS.BLUE_DARK};

  @media (max-width: ${BREAKPOINTS.MD}px) {
    position: absolute;
    transition: left 0.3s;
    will-change: left;
    left: ${(props) => (props.isOpen ? 0 : -240)}px;
    z-index: 2;
  }
`

export const SidebarTitle = styled(MediumHeader)`
  color: ${COLORS.BLUE_TEXT};
  font-weight: normal;
  text-align: center;
  margin-top: 16px;
`

export const ArrowLeftButton = styled.img`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
`

export const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 136px;
`

export const NavLink = styled(ReactRouterNavLink)`
  color: ${COLORS.BLUE_TEXT};
  font-size: 14px;
  text-decoration: none;
  padding: 20px 14px;
  margin: 0 8px 0 8px;
  border-radius: 8px;

  &.active {
    background-color: ${COLORS.OVERLAY_LIGHT};
  }
`
