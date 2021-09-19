import React, { FC, SyntheticEvent } from 'react'
import { DotsClickArea, DotsIcon } from '../CardList/CardList.styled'
import Menu from '../Menu/Menu'

export { MenuItem as DotsMenuItem } from '../Menu/Menu'

export const DotsMenuButton: FC = ({ children }) => (
  <Menu button={<Dots />}>{children}</Menu>
)

type DotProps = {
  onClick?: (event: SyntheticEvent) => void
}

const Dots: FC<DotProps> = React.forwardRef<HTMLDivElement, DotProps>(
  ({ ...props }, ref) => (
    <DotsClickArea ref={ref} {...props}>
      <DotsIcon src='images/dots.svg' />
    </DotsClickArea>
  )
)
