import styled from '@emotion/styled'
import { COLORS } from '../../styles/colors'
import { Text } from '../../styles/texts'

export const CardListUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

export const CardListItemLi = styled.li`
  height: 72px;
  box-shadow: 0 10px 50px -16px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  background-color: ${COLORS.WHITE};
  margin: 16px 0 16px 0;
  display: flex;
  align-items: center;
  padding: 0 32px 0 32px;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export const CardListItemTitle = styled(Text)`
  color: ${COLORS.TEXT};
`

export const DotsClickArea = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  margin-left: auto;

  &:hover {
    background-color: ${COLORS.GREY_TRANSPARENT};
  }
`

export const DotsIcon = styled.img`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Icon = styled.img`
  width: 16px;
  margin-right: 8px;
`
