import { FC, ReactNode, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Entry } from '../../interfaces';
import { EntriesContext, EntriesReducer } from './';

export interface EntriesState {
    entries: Entry[],
}

interface EntriesProviderPros {
    children: ReactNode
}
const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: [],
}

export const EntriesProvider: FC<EntriesProviderPros> = ({children}) => {

  const [state, dispatch] = useReducer(EntriesReducer, ENTRIES_INITIAL_STATE)
   
  
const addNewEntry = (description: string ) => {
  const newEntry: Entry = {
    _id: uuidv4(),
    description,
    createdAt: Date.now(),
    status: 'next-up'
  }
  dispatch({type: '[Entry] Add-Entry', payload: newEntry})
}

const upDateEntry = (entry: Entry) => {
  dispatch({type: '[Entry] Entry-Updated', payload: entry})
}
  return (
    <EntriesContext.Provider value={{
       ...state,
       addNewEntry,
       upDateEntry
    }}>
        {children}
    </EntriesContext.Provider>
  )
}
