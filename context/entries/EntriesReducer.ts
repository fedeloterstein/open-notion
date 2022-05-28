import { Entry } from '../../interfaces'
import { EntriesState } from './'

type EntriesActionType =
  | { type: '[Entry] Add-Entry', payload: Entry }

export const EntriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
  
    switch (action.type) {
    case '[Entry] Add-Entry':
      return {
        ...state,
        entries: [...state.entries, action.payload]
      }

    default:
      return state
  }
}
