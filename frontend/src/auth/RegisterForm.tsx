import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Formik, FormikHelpers } from 'formik'
import { RegisterValues } from '../types'
import api from '../api'
import {
  ErrorMessage,
  FormCard,
  FormInput,
  FormLabel,
  InputFormControl,
  SubmitButton,
  TextBlock,
} from '../designSystem/Form/Form'
import { Link, MediumHeader } from '../styles/texts'
import { css } from '@emotion/css'

function Register() {
  const [error, setError] = useState<string>('')
  const history = useHistory()

  const initialValues: RegisterValues = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  }

  const handleSubmit = async (
    values: RegisterValues,
    { setSubmitting }: FormikHelpers<RegisterValues>
  ) => {
    try {
      await api.post('/auth/register', values)
      await api.post('/auth/login', {
        username: values.username,
        password: values.password,
      })
      setSubmitting?.(false)
      history.push('/')
    } catch (error: any) {
      if (error.response && error.response.data) {
        const { error: message } = error.response.data
        message && setError(message)
      }
      setSubmitting?.(false)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validate={() => {
        return {}
      }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormCard
          className={css`
            margin: 64px auto 64px auto;
          `}
        >
          <MediumHeader
            className={css`
              text-align: center;
            `}
          >
            Register
          </MediumHeader>
          <InputFormControl>
            <FormLabel>Username</FormLabel>
            <FormInput
              type='text'
              name='username'
              placeholder='Username'
              autoFocus
            />
          </InputFormControl>
          <InputFormControl>
            <FormLabel>Email</FormLabel>
            <FormInput type='text' name='email' placeholder='Email' />
          </InputFormControl>
          <InputFormControl>
            <FormLabel>Password</FormLabel>
            <FormInput type='password' name='password' placeholder='Password' />
          </InputFormControl>
          <InputFormControl>
            <FormLabel>Confirm Password</FormLabel>
            <FormInput
              type='password'
              name='passwordConfirm'
              placeholder='Confirm password'
            />
          </InputFormControl>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <TextBlock>
            Already have an account ? <Link to='/login'>login</Link>
          </TextBlock>
          <SubmitButton type='submit' disabled={isSubmitting}>
            Register
          </SubmitButton>
        </FormCard>
      )}
    </Formik>
  )
}

export default Register
