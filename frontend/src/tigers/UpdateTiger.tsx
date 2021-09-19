import client from '../api'
import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import TigerForm from './TigerForm'
import { Tiger } from '../types'
import { useQuery, useMutation, useQueryClient } from 'react-query'

type Props = {
  id: string | number
  onSubmit?: () => void
}

const UpdateTiger: FC<Props> = ({ id, onSubmit }) => {
  const queryClient = useQueryClient()
  const history = useHistory()

  const { data, isLoading } = useQuery<Tiger>(['tigers', id], () =>
    client.get(`/api/v1/tigers/${id}`).then((response) => response.data)
  )

  const updateTiger = useMutation<Tiger, any, Tiger>(
    (values: Tiger) =>
      client
        .put(`/api/v1/tigers/${id}`, values)
        .then((response) => response.data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('tigers')
      },
    }
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  const tiger = data as Tiger
  return (
    <TigerForm
      title='Edit Tiger'
      tiger={tiger}
      submitText='Edit Tiger'
      onSubmit={(values, { setSubmitting }) => {
        updateTiger.mutate(values)
        setSubmitting?.(false)
        onSubmit?.()
        history.push('/tigers')
      }}
    />
  )
}

export default UpdateTiger
