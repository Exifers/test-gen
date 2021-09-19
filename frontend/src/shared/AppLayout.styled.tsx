import styled from '@emotion/styled'
import { COLORS } from '../styles/colors'

export const AppContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  background-color: ${COLORS.GREY_LIGHT};
`
