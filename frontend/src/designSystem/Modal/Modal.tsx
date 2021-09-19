import React, { FC, SyntheticEvent } from 'react'
import ReactModal from 'react-modal'

ReactModal.setAppElement('#root')

if (ReactModal.defaultStyles.overlay) {
  ReactModal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,0.5)'
}
if (ReactModal.defaultStyles.content) {
  ReactModal.defaultStyles.content.borderRadius = '16px'
  ReactModal.defaultStyles.content.padding = '32px'
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

type Props = {
  isOpen: boolean
  onRequestClose: (event: SyntheticEvent) => void
}

const Modal: FC<Props> = ({ children, isOpen, onRequestClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={onRequestClose}
    >
      {children}
    </ReactModal>
  )
}

export default Modal
