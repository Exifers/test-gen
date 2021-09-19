import React, { FC, useContext, useMemo, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import client from '../api'
import { Tiger } from '../types'
import { Main } from '../shared/Main'
import CardList, { CardListItem } from '../designSystem/CardList/CardList'
import TigerHeader from './TigerHeader'
import EmptyPlaceholder from '../designSystem/EmptyPlaceholder/EmptyPlaceholder'
import UpdateTiger from './UpdateTiger'

const TigersSearchQueryContext =
  React.createContext<TigersSearchQueryContextType>(undefined as any)
type TigersSearchQueryContextType = {
  tigersSearchQuery: string
  setTigersSearchQuery: (value: string) => void
}

export const useTigersSearchQueryContext = () => {
  const [tigersSearchQuery, setTigersSearchQuery] = useState<string>('')

  return useMemo(
    () => ({
      tigersSearchQuery,
      setTigersSearchQuery,
    }),
    [tigersSearchQuery, setTigersSearchQuery]
  )
}

export const useTigersSearchQuery = () => {
  return useContext(TigersSearchQueryContext)
}

const ListTigers: FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const tigersSearchQueryContext = useTigersSearchQueryContext()
  const { tigersSearchQuery } = tigersSearchQueryContext

  const queryClient = useQueryClient()
  const tigersQuery = useQuery<Tiger[]>('tigers', () => {
    return client
      .get('/api/v1/tigers')
      .then((response) => response.data) as Promise<Tiger[]>
  })

  const deleteTiger = useMutation<any, any, Partial<Tiger>>(
    ({ id }) => {
      return client.delete(`/api/v1/tigers/${id}`)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('tigers')
      },
    }
  )

  // TODO: convert into server side search, here it's only client side
  const queryFilter = ({ name }: Tiger) => name.includes(tigersSearchQuery)

  return (
    <TigersSearchQueryContext.Provider value={tigersSearchQueryContext}>
      <TigerHeader modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      <Main>
        <CardList>
          {tigersQuery.data?.filter(queryFilter)?.map((tiger) => (
            <CardListItem
              key={tiger.id}
              title={tiger.name}
              id={tiger.id}
              onDelete={() => {
                deleteTiger.mutate({ id: tiger.id })
              }}
              renderEditModalContent={({ setModalIsOpen }) => (
                <UpdateTiger
                  id={tiger.id!}
                  onSubmit={() => setModalIsOpen(false)}
                />
              )}
            />
          ))}
          {tigersQuery.data?.length === 0 && (
            <EmptyPlaceholder
              buttonText='Create a Tiger'
              text='No tiger could be found'
              onClick={() => {
                setModalIsOpen(true)
              }}
            />
          )}
        </CardList>
      </Main>
    </TigersSearchQueryContext.Provider>
  )
}

export default ListTigers
