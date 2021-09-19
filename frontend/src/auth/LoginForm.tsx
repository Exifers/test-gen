import React, { useState } from 'react'
import { Formik, FormikHelpers } from 'formik'

import { LoginValues } from '../types'
import client from '../api'
import { useHistory } from 'react-router-dom'
import { useQueryClient } from 'react-query'
import {
  ErrorMessage,
  FormCard,
  FormInput,
  FormLabel,
  InputFormControl,
  SubmitButton,
  TextBlock,
} from '../designSystem/Form/Form'
import { MediumHeader, Link } from '../styles/texts'
import { css } from '@emotion/css'

function Login() {
  const [error, setError] = useState<string>('')
  const history = useHistory()
  const queryClient = useQueryClient()

  const initialValues: LoginValues = {
    username: '',
    password: '',
  }

  const handleError = (
    error: any,
    { setSubmitting }: Partial<FormikHelpers<LoginValues>>
  ) => {
    if (error.response && error.response.data) {
      const { error: message } = error.response.data
      message && setError(message)
    }
    setSubmitting?.(false)
  }

  const handleSubmit = async (
    values: LoginValues,
    { setSubmitting }: FormikHelpers<LoginValues>
  ) => {
    try {
      await client.post('/auth/login', values)
      setSubmitting?.(false)
      await queryClient.invalidateQueries('user')
      history.push('/')
    } catch (error) {
      handleError(error, { setSubmitting })
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
            Login
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
            <FormLabel>Password</FormLabel>
            <FormInput type='password' name='password' placeholder='Password' />
          </InputFormControl>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <TextBlock>
            Don't have an account yet ? <Link to='/register'>register</Link>
          </TextBlock>
          <SubmitButton type='submit' disabled={isSubmitting}>
            Login
          </SubmitButton>
        </FormCard>
      )}
    </Formik>
  )
}

export default Login
