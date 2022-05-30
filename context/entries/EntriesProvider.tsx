import { FC, ReactNode, useEffect, useReducer } from 'react'
import { entriesApi } from '../../apis'

import { Entry } from '../../interfaces'
import { EntriesContext, EntriesReducer } from './'

export interface EntriesState {
  entries: Entry[]
}

interface EntriesProviderPros {
  children: ReactNode
}
const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [],
}

export const EntriesProvider: FC<EntriesProviderPros> = ({ children }) => {
  const [state, dispatch] = useReducer(EntriesReducer, ENTRIES_INITIAL_STATE)

  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>('/entries', { description })
    dispatch({ type: '[Entry] Add-Entry', payload: data })
  }

  const upDateEntry = async ({ _id, description, status }: Entry) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, {
        description,
        status,
      })

      dispatch({ type: '[Entry] Entry-Updated', payload: data })
    } catch (error) {
      console.log(error);
    }
  }

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>('/entries')

    dispatch({ type: '[Entry] Refresh-Data', payload: data })
  }

  useEffect(() => {
    refreshEntries()
  }, [])

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
        upDateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  )
}
