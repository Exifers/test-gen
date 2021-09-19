import React, { FC } from 'react'
import { GlobalBackground, Title } from './BackgroundLayout.styled'

const BackgroundLayout: FC = ({ children }) => {
  return (
    <>
      <GlobalBackground />
      <Title>Eventoo</Title>
      {children}
    </>
  )
}

export default BackgroundLayout
