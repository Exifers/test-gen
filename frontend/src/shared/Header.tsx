import React, { ChangeEvent, FC, HTMLAttributes } from 'react'
import {
  HeaderContainer,
  NewButtonButton,
  PlusIcon,
  SearchBoxContainer,
  SearchBoxInput,
  SearchIcon,
} from './Header.styled'
import { useIsMobile } from '../util/useIsMobile'

export { HeaderTitle } from './Header.styled'

type SearchBoxProps = {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const SearchBox: FC<SearchBoxProps> = ({ value, onChange }) => (
  <SearchBoxContainer>
    <SearchIcon src='/images/search.svg' />
    <SearchBoxInput
      type='text'
      placeholder='Search ...'
      value={value}
      onChange={onChange}
    />
  </SearchBoxContainer>
)

export const NewButton: FC<HTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  const isMobile = useIsMobile()
  return (
    <NewButtonButton {...props}>
      {!isMobile && children}
      <PlusIcon src='/images/plus.svg' />
    </NewButtonButton>
  )
}

const Header: FC = ({ children }) => (
  <HeaderContainer>{children}</HeaderContainer>
)

export default Header
