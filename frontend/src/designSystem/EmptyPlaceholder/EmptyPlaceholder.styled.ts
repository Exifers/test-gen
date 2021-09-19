import styled from '@emotion/styled'
import { COLORS } from '../../styles/colors'

export const EmptyPlaceholderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 160px;
`

export const EmptyPlaceholderIcon = styled.img`
  margin-bottom: 20px;
`

export const EmptyPlaceholderText = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${COLORS.GREY_SLIGHTLY_DARK};
`

export const EmptyPlaceholderButton = styled.button`
  box-shadow: none;
  border: none;
  color: ${COLORS.WHITE};
  background-color: ${COLORS.BLUE};
  border-radius: 8px;
  padding: 18px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  margin-top: 32px;

  &:active {
    background-color: ${COLORS.BLUE_LIGHT};
  }
`
