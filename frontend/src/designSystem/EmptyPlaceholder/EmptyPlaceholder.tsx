import React, { FC, HTMLAttributes } from 'react'
import {
  EmptyPlaceholderButton,
  EmptyPlaceholderContainer,
  EmptyPlaceholderIcon,
  EmptyPlaceholderText,
} from './EmptyPlaceholder.styled'

type Props = {
  text: string
  buttonText: string
}

const EmptyPlaceholder: FC<Props & HTMLAttributes<HTMLButtonElement>> = ({
  buttonText,
  text,
  ...props
}) => (
  <EmptyPlaceholderContainer>
    <EmptyPlaceholderIcon src='/images/empty.svg' />
    <EmptyPlaceholderText>{text}</EmptyPlaceholderText>
    <EmptyPlaceholderButton {...props}>{buttonText}</EmptyPlaceholderButton>
  </EmptyPlaceholderContainer>
)

export default EmptyPlaceholder
