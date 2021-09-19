import React, { FC, useState, ReactElement } from 'react'
import {
  CardListItemLi,
  CardListItemTitle,
  CardListUl,
  Icon,
} from './CardList.styled'
import '@szhsin/react-menu/dist/index.css'
import { css } from '@emotion/css'
import { COLORS } from '../../styles/colors'
import { DotsMenuButton, DotsMenuItem } from '../DotsMenuButton/DotsMenuButton'
import Modal from '../Modal/Modal'

type RenderEditModalContentArgs = {
  setModalIsOpen: (value: boolean) => void
}

type CardListItemProps = {
  title: string
  id?: string | number
  onDelete?: () => void
  renderEditModalContent: ({
    setModalIsOpen,
  }: RenderEditModalContentArgs) => ReactElement | null
}

export const CardListItem: FC<CardListItemProps> = ({
  id,
  title,
  onDelete,
  renderEditModalContent,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  if (id === undefined) {
    return null
  }

  return (
    <CardListItemLi>
      <CardListItemTitle>{title}</CardListItemTitle>
      <DotsMenuButton>
        <DotsMenuItem onClick={() => setModalIsOpen(true)}>
          <Icon src='/images/pen.svg' />
          Edit
        </DotsMenuItem>
        <DotsMenuItem
          className={css`
            color: ${COLORS.RED};
          `}
          onClick={() => {
            onDelete?.()
          }}
        >
          <Icon src='/images/trash.svg' />
          Delete
        </DotsMenuItem>
      </DotsMenuButton>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        {renderEditModalContent({ setModalIsOpen })}
      </Modal>
    </CardListItemLi>
  )
}

const CardList: FC = ({ children }) => <CardListUl>{children}</CardListUl>

export default CardList
