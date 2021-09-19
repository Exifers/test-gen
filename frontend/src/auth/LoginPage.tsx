import React, { FC } from 'react'
import BackgroundLayout from '../shared/BackgroundLayout'
import LoginForm from './LoginForm'

const LoginPage: FC = () => {
  return (
    <BackgroundLayout>
      <LoginForm />
    </BackgroundLayout>
  )
}

export default LoginPage
