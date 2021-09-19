import { css, Global } from '@emotion/react'

export const GlobalStyles = () => (
  <Global
    styles={css`
      html {
        font-family: 'Lato', sans-serif !important;
      }
    `}
  />
)

export default GlobalStyles
