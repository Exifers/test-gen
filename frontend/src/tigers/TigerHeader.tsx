import React, { FC, useContext } from 'react'
import Header, { HeaderTitle, NewButton, SearchBox } from '../shared/Header'
import Modal from '../designSystem/Modal/Modal'
import CreateTiger from './CreateTiger'
import { useIsMobile } from '../util/useIsMobile'
import BurgerButton from '../designSystem/BurgerButton/BurgerButton'
import { SidebarIsOpenContext } from '../shared/AppLayout'
import { useTigersSearchQuery } from './ListTiger'

type Props = {
  modalIsOpen: boolean
  setModalIsOpen: (value: boolean) => void
}

const TigerHeader: FC<Props> = ({ modalIsOpen, setModalIsOpen }) => {
  const { tigersSearchQuery, setTigersSearchQuery } = useTigersSearchQuery()
  const { setSidebarIsOpen } = useContext(SidebarIsOpenContext)
  const isMobile = useIsMobile()
  return (
    <Header>
      {isMobile && <BurgerButton onClick={() => setSidebarIsOpen(true)} />}
      <HeaderTitle>Tigers</HeaderTitle>
      {!isMobile && (
        <SearchBox
          value={tigersSearchQuery}
          onChange={(event) => setTigersSearchQuery(event.target.value)}
        />
      )}
      <NewButton onClick={() => setModalIsOpen(true)}>New Tiger</NewButton>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <CreateTiger onSubmit={() => setModalIsOpen(false)} />
      </Modal>
    </Header>
  )
}

export default TigerHeader
