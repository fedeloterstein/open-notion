import { EntriesState } from './'

type EntriesActionType =
  | { type: '[Entries + - ActionName' }

export const EntriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
  
    switch (action.type) {
    case 'UI - Open Sidebar':
      return {
        ...state,
        sideMenuOpen: true,
      }

    default:
      return state
  }
}
