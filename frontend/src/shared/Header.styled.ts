import styled from '@emotion/styled'
import { SmallHeader } from '../styles/texts'
import { COLORS } from '../styles/colors'
import { BREAKPOINTS } from '../styles/breakpoints'

export const HeaderTitle = styled(SmallHeader)`
  margin-right: auto;
`

export const HeaderContainer = styled.div`
  height: 104px;
  padding: 32px 40px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  background-color: ${COLORS.WHITE};
`

export const SearchBoxContainer = styled.div`
  height: 40px;
  position: relative;
`

export const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  transform: translate(19px, -50%);
`

export const SearchBoxInput = styled.input`
  border: none;
  box-shadow: none;
  border-radius: 8px;
  padding: 10px 10px 10px 40px;
  box-sizing: border-box;
  background-color: ${COLORS.GREY_LIGHT};
  height: 40px;
`

export const NewButtonButton = styled.button`
  border: none;
  box-shadow: none;
  height: 40px;
  background-color: ${COLORS.BLUE};
  padding: 12px;
  color: ${COLORS.WHITE};
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  margin-left: 16px;
  cursor: pointer;
  display: flex;
  white-space: nowrap;
`

export const PlusIcon = styled.img`
  margin-left: 20px;

  @media (max-width: ${BREAKPOINTS.MD}px) {
    margin: 0;
  }
`
