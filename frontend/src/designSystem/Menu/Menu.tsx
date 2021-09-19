import React, { FC } from 'react'
import {
  applyStatics,
  ClickEvent,
  MenuItem as ReactMenuMenuItem,
  MenuProps as ReactMenuMenuProps,
} from '@szhsin/react-menu'
import { StyledMenu, StyledMenuItem } from './Menu.styled'
import { css } from '@emotion/css'

/**
 * A dropdown menu that appears when clicking on a button.
 * Usage :
 * ```jsx
 * <Menu button={<SomeClickableButton/>}>
 *     <MenuItem>One</MenuItem>
 *     <MenuItem>Two</MenuItem>
 * </Menu>
 * ```
 */

type MenuItemProps = {
  className?: string
  onClick: (event: ClickEvent) => void
}

// https://szhsin.github.io/react-menu/docs#utils-apply-hoc
const withMenuItem = applyStatics<FC<MenuItemProps>>(ReactMenuMenuItem)

const MenuItemComponent: FC<MenuItemProps> = ({
  className,
  onClick,
  children,
  ...props
}) => (
  <StyledMenuItem className={className} onClick={onClick} {...props}>
    {children}
  </StyledMenuItem>
)

export const MenuItem: FC<MenuItemProps> = withMenuItem(MenuItemComponent)

type MenuProps = {
  button: React.ReactElement
} & Partial<ReactMenuMenuProps>

const Menu: FC<MenuProps> = ({ children, button, ...props }) => (
  <StyledMenu
    menuButton={button}
    direction='left'
    className={css`
      min-width: auto;
    `}
    {...props}
  >
    {children}
  </StyledMenu>
)

export default Menu
