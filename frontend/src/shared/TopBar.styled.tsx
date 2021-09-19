import styled from '@emotion/styled'
import { Text } from '../styles/texts'
import { COLORS } from '../styles/colors'

export const TopBarContainer = styled.div`
  height: 64px;
  background-color: ${COLORS.WHITE};
  display: flex;
  border-bottom: 2px solid ${COLORS.GREY_LIGHT};
`

export const ProfileDropDownContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
`

export const ProfilePhoto = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`

export const Username = styled(Text)`
  font-weight: 700;
  margin: 0 80px 0 3px;
`
