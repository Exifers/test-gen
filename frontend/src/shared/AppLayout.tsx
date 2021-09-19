import React, { FC, useMemo, useState } from 'react'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import { AppContainer, MainContainer } from './AppLayout.styled'
import { useIsMobile } from '../util/useIsMobile'

export const SidebarIsOpenContext =
  React.createContext<SidebarIsOpenContextType>(null as any)
type SidebarIsOpenContextType = {
  sidebarIsOpen: boolean
  setSidebarIsOpen: (value: boolean) => void
}

const useSidebarIsOpenContext = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false)
  return useMemo(
    () => ({
      sidebarIsOpen,
      setSidebarIsOpen,
    }),
    [sidebarIsOpen, setSidebarIsOpen]
  )
}

const AppLayout: FC = ({ children }) => {
  const sidebarIsOpenContext = useSidebarIsOpenContext()

  const isMobile = useIsMobile()
  return (
    <AppContainer>
      <SidebarIsOpenContext.Provider value={sidebarIsOpenContext}>
        <Sidebar />
        <MainContainer>
          {!isMobile && <TopBar />}
          {children}
        </MainContainer>
      </SidebarIsOpenContext.Provider>
    </AppContainer>
  )
}

export default AppLayout
