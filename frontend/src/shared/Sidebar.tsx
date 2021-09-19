import React, { useContext } from 'react'
import {
  ArrowLeftButton,
  NavLink,
  NavMenu,
  SidebarContainer,
  SidebarOverlay,
  SidebarTitle,
} from './Sidebar.styled'
import { SidebarIsOpenContext } from './AppLayout'
import { useIsMobile } from '../util/useIsMobile'

const Sidebar = () => {
  const { sidebarIsOpen, setSidebarIsOpen } = useContext(SidebarIsOpenContext)
  const isMobile = useIsMobile()
  return (
    <>
      <SidebarContainer isOpen={sidebarIsOpen}>
        <SidebarTitle>Zoo</SidebarTitle>
        <ArrowLeftButton
          src='/images/arrow_left.svg'
          onClick={() => setSidebarIsOpen(false)}
        />
        <NavMenu>
          <NavLink to='/tigers'>Tigers</NavLink>
        </NavMenu>
      </SidebarContainer>
      {isMobile && sidebarIsOpen && (
        <SidebarOverlay onClick={() => setSidebarIsOpen(false)} />
      )}
    </>
  )
}

export default Sidebar
