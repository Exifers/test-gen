import client from '../api'
import { FormikHelpers } from 'formik'
import React, { FC } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { Tiger, TigerError } from '../types'
import TigerForm from './TigerForm'
import { useHistory } from 'react-router-dom'

type Props = {
  onSubmit?: () => void
}

const CreateTiger: FC<Props> = ({ onSubmit }) => {
  const queryClient = useQueryClient()
  const history = useHistory()
  const createTiger = useMutation<Tiger, TigerError, Tiger>(
    (values) => {
      return client.post('/api/v1/tigers', values)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('tigers')
      },
    }
  )

  const handleSubmit = (
    values: Tiger,
    { setSubmitting }: FormikHelpers<Tiger>
  ) => {
    createTiger.mutate(values)
    setSubmitting?.(false)
    onSubmit?.()
    history.push('/tigers')
  }

  return (
    <TigerForm
      title='Create Tiger'
      submitText='Create a Tiger'
      onSubmit={handleSubmit}
    />
  )
}

export default CreateTiger
