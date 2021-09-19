import React from 'react'
import { Formik, FormikHelpers } from 'formik'
import { Tiger } from '../types'
import {
  FormCard,
  FormInput,
  FormLabel,
  InputFormControl,
  SubmitButton,
} from '../designSystem/Form/Form'
import { MediumHeader } from '../styles/texts'
import { css } from '@emotion/css'

type CreateProps = {
  tiger?: Tiger
  onSubmit: (values: Tiger, helpers: FormikHelpers<Tiger>) => void
  title: string
  submitText: string
}

function TigerForm({ tiger, onSubmit, title, submitText }: CreateProps) {
  const initialValues: Tiger = {
    name: tiger ? tiger.name : '',
  }

  return (
    <Formik
      initialValues={initialValues}
      validate={() => {
        return {}
      }}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <FormCard>
          <MediumHeader
            className={css`
              text-align: center;
              margin: 0;
            `}
          >
            {title}
          </MediumHeader>

          <InputFormControl
            className={css`
              margin: 16px 0 16px 0;
            `}
          >
            <FormLabel>Name</FormLabel>
            <FormInput type='text' name='name' placeholder='Name' autofocus />
          </InputFormControl>

          <SubmitButton
            type='submit'
            disabled={isSubmitting}
            className={css`
              margin-top: 32px;
            `}
          >
            {submitText}
          </SubmitButton>
        </FormCard>
      )}
    </Formik>
  )
}

export default TigerForm
