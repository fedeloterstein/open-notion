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
    entries: [{
      _id: uuidv4(),
      description: 'next-up: todo 1',
      status: 'next-up',
      createdAt: Date.now()
    },
    {
      _id: uuidv4(),
      description: 'in-progress: todo 2',
      status: 'in-progress',
      createdAt: Date.now() - 10000000
    },
    {
      _id: uuidv4(),
      description: 'completed: todo 3',
      status: 'completed',
      createdAt: Date.now() - 100000
    }],
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

  return (
    <EntriesContext.Provider value={{
       ...state,
       addNewEntry
    }}>
        {children}
    </EntriesContext.Provider>
  )
}
