import { BurgerButtonIcon } from './BurgerButton.styled'
import { FC, HTMLAttributes } from 'react'

const BurgerButton: FC<HTMLAttributes<HTMLImageElement>> = (props) => (
  <BurgerButtonIcon src='/images/burger_menu.svg' {...props} />
)

export default BurgerButton
