import React, { FC } from 'react'
import {
  ProfileDropDownContainer,
  ProfilePhoto,
  TopBarContainer,
  Username,
} from './TopBar.styled'
import { useMutation, useQuery } from 'react-query'
import client from '../api'
import Menu, { MenuItem } from '../designSystem/Menu/Menu'
import { AxiosError } from 'axios'
import { ClickEvent } from '@szhsin/react-menu'
import { useHistory } from 'react-router-dom'

type UserReturnType = {
  username: string
}

type LogoutReturnType = {
  message: string
}

const ProfileDropDown: FC = () => {
  const history = useHistory()

  const { data: userData } = useQuery<UserReturnType>(
    'user',
    () => client.get('/auth/me').then(({ data }) => data),
    {
      retry: false,
    }
  )

  const logoutMutation = useMutation<LogoutReturnType, AxiosError, ClickEvent>(
    () => client.get('/auth/logout').then(({ data }) => data),
    {
      onSuccess: () => {
        history.push('/login')
      },
    }
  )

  return (
    <Menu
      button={
        <ProfileDropDownContainer>
          <ProfilePhoto src='/images/user.svg' />
          <Username>{userData?.username}</Username>
        </ProfileDropDownContainer>
      }
      direction='bottom'
    >
      <MenuItem onClick={logoutMutation.mutate}>Logout</MenuItem>
    </Menu>
  )
}

const TopBar: FC = () => (
  <TopBarContainer>
    <ProfileDropDown />
  </TopBarContainer>
)

export default TopBar
