import React, { FC } from 'react'
import BackgroundLayout from '../shared/BackgroundLayout'
import RegisterForm from './RegisterForm'

const RegisterPage: FC = () => {
  return (
    <BackgroundLayout>
      <RegisterForm />
    </BackgroundLayout>
  )
}

export default RegisterPage
